import React from "react";

const CategoryIcon = ({ name }) => {
    switch (name) {
        case "Understanding":
            return <polygon points="50,10 85,35 72,80 28,80 15,35" fill="#fff" />;

        case "Memory":
            return (
                <>
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#fff" strokeWidth="8" />
                    <path d="M50 25v25l15 15" stroke="#fff" strokeWidth="8" fill="none" strokeLinecap="round" />
                </>
            );

        case "Attention":
            return (
                <>
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#fff" strokeWidth="8" />
                    <circle cx="50" cy="50" r="12" fill="#fff" />
                </>
            );

        case "Decisions":
            return (
                <path
                    d="M50 15v65 M50 15L30 35 M50 15L70 35"
                    stroke="#fff"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            );

        case "Navigation":
            return (
                <path
                    d="M20 50H70 M50 30L70 50L50 70"
                    stroke="#fff"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            );

        default:
            return <circle cx="50" cy="50" r="35" fill="#fff" />;
    }
};

export default function HECCard({
    theme = "#47619C",
    name = "Understanding",
    cardTitle = "Title",
    cardText = "Description"
}) {
    return (
        <article className="he-card" style={{ "--theme": theme }}>
            <svg className="he-card-svg" viewBox="0 0 850 1200" aria-hidden="true" focusable="false">
                <rect x="25" y="25" width="800" height="1150" rx="60" fill={theme} />
                <rect x="60" y="350" width="730" height="800" rx="40" fill="#fff" />
            </svg>

            <div className="he-card-icon" aria-hidden="true">
                <svg viewBox="0 0 100 100" focusable="false">
                    <CategoryIcon name={name} />
                </svg>
            </div>

            <div className="he-card-category">{name}</div>
            <h3 className="he-card-title">{cardTitle}</h3>
            <p className="he-card-description">{cardText}</p>
        </article>
    );
}
