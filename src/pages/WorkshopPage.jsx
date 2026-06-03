import React, { useEffect, useMemo, useRef, useState } from "react";

import Tabs from "../components/Tabs.jsx";
import HECCard from "../components/card/HECCard.jsx";
import HECCardBack from "../components/card/HECCardBack.jsx";
import cardsData from "../data/cards/index.json";

const CARD_LIMIT = 3;
const STORAGE_KEY = "cogxp-workshop-v1";

const emptySlots = () => Array.from({ length: CARD_LIMIT }, () => null);

const createCardKey = (item) => {
    if (!item) return "";
    return `${item.category}-${item.card.title}`;
};

const buildPrompt = (card) => {
    return `Where could "${card.title}" appear in this product, service, journey or sprint scope?`;
};

const buildRequirement = (card) => {
    return `The experience should reduce the risk of "${card.title.toLowerCase()}" by making the journey clearer, easier to follow and less cognitively demanding.`;
};

const buildFacilitatorPrompt = (card) => {
    return `Ask the team for one real example where "${card.title}" could affect users, then capture the likely impact and one practical improvement.`;
};

export default function WorkshopPage() {
    const [revealedCards, setRevealedCards] = useState(emptySlots);
    const [workshopNotes, setWorkshopNotes] = useState({});
    const [selectedCard, setSelectedCard] = useState(null);
    const [currentStep, setCurrentStep] = useState(1);
    const [copyStatus, setCopyStatus] = useState("");
    const reportRef = useRef(null);

    const deck = useMemo(() => {
        return cardsData.categories.flatMap((category) =>
            category.cards.map((card) => ({
                category: category.name,
                theme: category.theme,
                card
            }))
        );
    }, []);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) return;

        try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed.revealedCards)) {
                setRevealedCards(parsed.revealedCards);
            }
            if (parsed.workshopNotes) {
                setWorkshopNotes(parsed.workshopNotes);
            }
            if (parsed.selectedCard) {
                setSelectedCard(parsed.selectedCard);
            }
            if (parsed.currentStep) {
                setCurrentStep(parsed.currentStep);
            }
        } catch {
            localStorage.removeItem(STORAGE_KEY);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
                revealedCards,
                workshopNotes,
                selectedCard,
                currentStep
            })
        );
    }, [revealedCards, workshopNotes, selectedCard, currentStep]);

    const activeCards = revealedCards.filter(Boolean);
    const selectedCount = activeCards.length;
    const allCardsSelected = selectedCount === CARD_LIMIT;

    const activeCard = activeCards.find(
        (item) => createCardKey(item) === selectedCard
    );

    const revealCard = (slotIndex) => {
        if (revealedCards[slotIndex] || currentStep !== 1) return;

        const availableCards = deck.filter((item) =>
            !revealedCards.some(
                (revealed) =>
                    revealed &&
                    revealed.category === item.category &&
                    revealed.card.title === item.card.title
            )
        );

        if (!availableCards.length) return;

        const randomCard =
            availableCards[Math.floor(Math.random() * availableCards.length)];

        const updatedCards = [...revealedCards];
        updatedCards[slotIndex] = randomCard;

        setRevealedCards(updatedCards);

        if (!selectedCard) {
            setSelectedCard(createCardKey(randomCard));
        }
    };

    const resetWorkshop = () => {
        setRevealedCards(emptySlots());
        setWorkshopNotes({});
        setSelectedCard(null);
        setCurrentStep(1);
        setCopyStatus("");
        localStorage.removeItem(STORAGE_KEY);
    };

    const updateNote = (key, field, value) => {
        setWorkshopNotes((prev) => ({
            ...prev,
            [key]: {
                ...prev[key],
                [field]: value
            }
        }));
    };

    const markdownOutput = useMemo(() => {
        if (!activeCards.length) return "";

        return [
            "# COGXP Workshop Summary",
            "",
            "Generated with COGXP — Human Experience Planning, powered by COGAI®.",
            "",
            ...activeCards.flatMap((item, index) => {
                const key = createCardKey(item);
                const notes = workshopNotes[key] || {};

                return [
                    `## ${index + 1}. ${item.card.title}`,
                    "",
                    `**Category:** ${item.category}`,
                    "",
                    `**Challenge:** ${item.card.text}`,
                    "",
                    `**Discussion prompt:** ${buildPrompt(item.card)}`,
                    "",
                    `**Suggested requirement:** ${buildRequirement(item.card)}`,
                    "",
                    "**Team notes:**",
                    notes.notes || "",
                    "",
                    "**Sprint requirement:**",
                    notes.requirement || "",
                    "",
                    "**Action / owner:**",
                    notes.action || "",
                    "",
                    "---",
                    ""
                ];
            })
        ].join("\n");
    }, [activeCards, workshopNotes]);

    const copyMarkdown = async () => {
        if (!markdownOutput) return;

        try {
            await navigator.clipboard.writeText(markdownOutput);
            setCopyStatus("Workshop summary copied.");
        } catch {
            setCopyStatus("Copy failed. Select and copy the summary manually.");
        }
    };

    const exportPdf = async () => {
        if (!reportRef.current) return;

        const html2pdf = (await import("html2pdf.js")).default;

        html2pdf()
            .set({
                margin: 12,
                filename: "cogxp-workshop-summary.pdf",
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
            })
            .from(reportRef.current)
            .save();
    };

    const continueToWorkshop = () => {
        if (!allCardsSelected) return;

        if (!selectedCard && activeCards[0]) {
            setSelectedCard(createCardKey(activeCards[0]));
        }

        setCurrentStep(2);
        window.setTimeout(() => {
            document.getElementById("cogxp-workshop")?.scrollIntoView({ behavior: "smooth" });
        }, 0);
    };

    return (
        <main>
            <section className="cogxp-hero">
                <div className="container cogxp-hero-inner">
                    <p className="eyebrow">COGXP by COGAI®</p>
                    <h1>Human Experience Planning</h1>
                    <p className="lead">
                        A free workshop card tool for helping teams discuss hidden human experience risks before they become product problems.
                    </p>
                    <a className="hero-link" href="#cogxp-cards">Start workshop</a>
                </div>
            </section>

            <section className="container py-5" id="cogxp-cards">
                <div className="step-panel" aria-labelledby="step-title">
                    <p className="eyebrow">Step {currentStep} of 2</p>
                    <h2 id="step-title">
                        {currentStep === 1 ? "Select three challenge cards" : "Discuss and capture outcomes"}
                    </h2>
                    <p>
                        {currentStep === 1
                            ? "Select any card position. Each card reveals one unique Human Experience challenge from the deck."
                            : "Choose a selected challenge, use the workshop tabs, and capture notes, requirements and actions."}
                    </p>
                </div>

                <div className="toolbar" aria-label="Workshop controls">
                    <button className="btn btn-outline-secondary" type="button" onClick={resetWorkshop}>
                        Reset Workshop
                    </button>

                    {currentStep === 2 && activeCards.length > 0 && (
                        <>
                            <button className="btn btn-primary" type="button" onClick={copyMarkdown}>
                                Copy Markdown
                            </button>
                            <button className="btn btn-primary" type="button" onClick={exportPdf}>
                                Export PDF
                            </button>
                        </>
                    )}
                </div>

                {copyStatus && <p className="status-message" role="status">{copyStatus}</p>}

                <div className="selection-progress" aria-live="polite">
                    <strong>{selectedCount} of {CARD_LIMIT} selected</strong>
                    <span>{allCardsSelected ? "Ready for discussion." : "Select all three cards to continue."}</span>
                </div>

                <div className="he-category-grid">
                    {revealedCards.map((revealed, index) => (
                        <button
                            key={index}
                            className="he-category-card"
                            onClick={() => revealCard(index)}
                            disabled={Boolean(revealed) || currentStep !== 1}
                            type="button"
                            aria-label={revealed ? `${revealed.card.title} revealed` : `Select card ${index + 1}`}
                        >
                            {revealed ? (
                                <HECCard
                                    theme={revealed.theme}
                                    name={revealed.category}
                                    cardTitle={revealed.card.title}
                                    cardText={revealed.card.text}
                                />
                            ) : (
                                <HECCardBack theme="#47619C" />
                            )}

                            <span className="he-category-label">
                                {revealed ? "Revealed" : "Select to draw"}
                            </span>
                        </button>
                    ))}
                </div>

                {currentStep === 1 && (
                    <div className="next-panel">
                        <button
                            className="btn btn-primary btn-lg"
                            type="button"
                            disabled={!allCardsSelected}
                            onClick={continueToWorkshop}
                        >
                            Continue to Workshop
                        </button>
                    </div>
                )}

                {currentStep === 2 && activeCards.length > 0 && (
                    <div className="he-report" id="cogxp-workshop">
                        <h2>Sprint Planning Summary</h2>
                        <p>
                            Select one of the revealed challenges to explore risk, discussion points, requirements and actions.
                        </p>

                        <div className="he-selected-tabs" aria-label="Selected challenges">
                            {activeCards.map((item) => {
                                const id = createCardKey(item);
                                return (
                                    <button
                                        key={id}
                                        className={`he-card-tab ${selectedCard === id ? "active" : ""}`}
                                        onClick={() => setSelectedCard(id)}
                                        type="button"
                                    >
                                        {item.card.title}
                                    </button>
                                );
                            })}
                        </div>

                        {activeCard && (() => {
                            const key = createCardKey(activeCard);
                            const notes = workshopNotes[key] || {};

                            return (
                                <section className="he-report-section">
                                    <header>
                                        <div>
                                            <p className="eyebrow">Selected Challenge</p>
                                            <h3>{activeCard.card.title}</h3>
                                        </div>

                                        <span
                                            className="he-badge"
                                            style={{ background: activeCard.theme }}
                                        >
                                            {activeCard.category}
                                        </span>
                                    </header>

                                    <Tabs
                                        color={activeCard.theme}
                                        tabs={[
                                            {
                                                id: "risk",
                                                label: "Risk",
                                                content: (
                                                    <>
                                                        <div className="he-workshop-block">
                                                            <h4>Challenge</h4>
                                                            <p>{activeCard.card.text}</p>
                                                        </div>
                                                        <div className="he-workshop-block">
                                                            <h4>Facilitator prompt</h4>
                                                            <p>{buildFacilitatorPrompt(activeCard.card)}</p>
                                                        </div>
                                                    </>
                                                )
                                            },
                                            {
                                                id: "discussion",
                                                label: "Discussion",
                                                content: (
                                                    <>
                                                        <div className="he-workshop-block">
                                                            <h4>Discussion prompt</h4>
                                                            <p>{buildPrompt(activeCard.card)}</p>
                                                        </div>
                                                        <label className="field-label">
                                                            Team notes
                                                            <textarea
                                                                value={notes.notes || ""}
                                                                onChange={(event) =>
                                                                    updateNote(key, "notes", event.target.value)
                                                                }
                                                                placeholder="Capture observations, examples, debate, evidence or concerns."
                                                            />
                                                        </label>
                                                    </>
                                                )
                                            },
                                            {
                                                id: "requirements",
                                                label: "Requirements",
                                                content: (
                                                    <>
                                                        <div className="he-workshop-block">
                                                            <h4>Suggested requirement</h4>
                                                            <p>{buildRequirement(activeCard.card)}</p>
                                                        </div>
                                                        <label className="field-label">
                                                            Sprint requirement
                                                            <textarea
                                                                value={notes.requirement || ""}
                                                                onChange={(event) =>
                                                                    updateNote(key, "requirement", event.target.value)
                                                                }
                                                                placeholder="Turn the discussion into a requirement or acceptance criterion."
                                                            />
                                                        </label>
                                                    </>
                                                )
                                            },
                                            {
                                                id: "actions",
                                                label: "Actions",
                                                content: (
                                                    <label className="field-label">
                                                        Action / owner
                                                        <textarea
                                                            value={notes.action || ""}
                                                            onChange={(event) =>
                                                                updateNote(key, "action", event.target.value)
                                                            }
                                                            placeholder="Add the next action, owner, Jira reference or follow-up decision."
                                                        />
                                                    </label>
                                                )
                                            }
                                        ]}
                                    />
                                </section>
                            );
                        })()}

                        <section className="summary-export" ref={reportRef}>
                            <h2>COGXP Workshop Summary</h2>
                            <p>Generated with COGXP — Human Experience Planning, powered by COGAI®.</p>

                            {activeCards.map((item, index) => {
                                const key = createCardKey(item);
                                const notes = workshopNotes[key] || {};
                                return (
                                    <article key={key} className="summary-card">
                                        <h3>{index + 1}. {item.card.title}</h3>
                                        <p><strong>Category:</strong> {item.category}</p>
                                        <p><strong>Challenge:</strong> {item.card.text}</p>
                                        <p><strong>Discussion prompt:</strong> {buildPrompt(item.card)}</p>
                                        {notes.notes && <p><strong>Team notes:</strong> {notes.notes}</p>}
                                        {notes.requirement && <p><strong>Sprint requirement:</strong> {notes.requirement}</p>}
                                        {notes.action && <p><strong>Action / owner:</strong> {notes.action}</p>}
                                    </article>
                                );
                            })}
                        </section>
                    </div>
                )}
            </section>
        </main>
    );
}
