import React, { useEffect, useRef, useState } from "react";

export default function Tabs({ tabs = [], defaultTab, color = "#47619C", ariaLabel = "Workshop sections" }) {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
    const tabListRef = useRef(null);

    useEffect(() => {
        if (!tabs.some((tab) => tab.id === activeTab)) {
            setActiveTab(tabs[0]?.id);
        }
    }, [tabs, activeTab]);

    useEffect(() => {
        const tabList = tabListRef.current;
        if (!tabList) return undefined;

        const handleKeyDown = (event) => {
            const keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
            if (!keys.includes(event.key)) return;

            const buttons = Array.from(tabList.querySelectorAll("[role=tab]"));
            const currentIndex = buttons.findIndex((button) => button === document.activeElement);

            let newIndex = currentIndex;
            if (event.key === "ArrowRight") newIndex = (currentIndex + 1) % buttons.length;
            if (event.key === "ArrowLeft") newIndex = (currentIndex - 1 + buttons.length) % buttons.length;
            if (event.key === "Home") newIndex = 0;
            if (event.key === "End") newIndex = buttons.length - 1;

            buttons[newIndex]?.focus();
            setActiveTab(buttons[newIndex]?.dataset.id);
            event.preventDefault();
        };

        tabList.addEventListener("keydown", handleKeyDown);
        return () => tabList.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="tabs-component" style={{ "--tabs-color": color }}>
            <div
                role="tablist"
                aria-label={ariaLabel}
                ref={tabListRef}
                className="tabs-header"
            >
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        role="tab"
                        data-id={tab.id}
                        aria-selected={activeTab === tab.id}
                        aria-controls={`panel-${tab.id}`}
                        id={`tab-${tab.id}`}
                        tabIndex={activeTab === tab.id ? 0 : -1}
                        onClick={() => setActiveTab(tab.id)}
                        className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                        type="button"
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {tabs.map((tab) => (
                <div
                    key={tab.id}
                    role="tabpanel"
                    id={`panel-${tab.id}`}
                    aria-labelledby={`tab-${tab.id}`}
                    hidden={activeTab !== tab.id}
                    className="tab-panel"
                >
                    {tab.content}
                </div>
            ))}
        </div>
    );
}
