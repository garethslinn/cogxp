import React from "react";
import Button from "../components/Button";

export default function Hero({
             eyebrow,
             title,
             description,
             ctaText,
             ctaHref
         }) {

    const handleClick = () => {

        const target =
            document.querySelector(ctaHref);

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    };

    return (

        <section className="cogxp-hero">

            <div className="container cogxp-hero-inner">

                {eyebrow && (
                    <p className="eyebrow">
                        {eyebrow}
                    </p>
                )}

                <h1>
                    {title}
                </h1>

                {description && (
                    <p className="lead">
                        {description}
                    </p>
                )}

                {ctaText && ctaHref && (

                    <Button
                        variant="secondary"
                        label={ctaText}
                        onClick={handleClick}
                    />

                )}

            </div>

        </section>

    );
}