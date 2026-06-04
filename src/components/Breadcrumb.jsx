import React from "react";
import { Link } from "react-router-dom";
import { useBreadcrumb } from "../context/BreadcrumbContext";

const Breadcrumb = ({ items }) => {
    const { breadcrumbs } = useBreadcrumb();
    const breadcrumbItems = items || breadcrumbs;

    return (
        <nav aria-label="Breadcrumb" aria-live="polite">
            <div className="container">
                <h2 className="visually-hidden">Breadcrumb</h2>
                <ol>
                    {breadcrumbItems.map((item, index) => {
                        const isLast = index === breadcrumbItems.length - 1;
                        const path = item.path || "/"; // fallback safety for Home

                        return (
                            <li key={index} aria-current={isLast ? "page" : undefined}>
                                {isLast ? (
                                    <span>{item.label}</span>
                                ) : (
                                    <Link to={path}>{item.label}</Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumb;
