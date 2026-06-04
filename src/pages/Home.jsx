import React, {useEffect} from "react";
import Hero from "../components/Hero.jsx";
import { useBreadcrumb } from "../context/BreadcrumbContext.jsx";


export default function Home() {

    const { updateBreadcrumbs } = useBreadcrumb();

    useEffect(() => {
        updateBreadcrumbs([{ label: "", path: "/" }]);
    }, []);

    return (
        <main className="py-5">

            <Hero
                eyebrow="COGXP by COGAI®"
                title="Human Experience Planning"
                description="
                    A free workshop card tool for helping teams
                    discuss hidden human experience risks before
                    they become product problems.
                "
                ctaText="Start Workshop"
                ctaHref="#cogxp-cards"
            />
            <section className="container">
                <p>
                    Human Experience Planning
                </p>


            </section>
        </main>
    );
}