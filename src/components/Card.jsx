import React from "react";

const Card = ({ children, className = "", as: Element = "div" }) => {
    return (
        <Element className={`card ${className}`}>
            {children}
        </Element>
    );
};

export default Card;