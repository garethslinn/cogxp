import React, { createContext, useContext, useState } from "react";

const BreadcrumbContext = createContext();

export const useBreadcrumb = () => useContext(BreadcrumbContext);

export const BreadcrumbProvider = ({ children }) => {
    const [breadcrumbs, setBreadcrumbs] = useState([
        { label: "Home", path: "/" }
    ]);

    const updateBreadcrumbs = (newBreadcrumbs) => {
        setBreadcrumbs([
            { label: "Home", path: "/" },
            ...newBreadcrumbs
        ]);
    };

    return (
        <BreadcrumbContext.Provider value={{ breadcrumbs, updateBreadcrumbs }}>
            {children}
        </BreadcrumbContext.Provider>
    );
};
