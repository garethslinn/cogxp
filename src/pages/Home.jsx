import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import { useBreadcrumb } from "../context/BreadcrumbContext.jsx";


export default function Home() {
    const { updateBreadcrumbs } = useBreadcrumb();
    const navigate = useNavigate();

    useEffect(() => {
        updateBreadcrumbs([{ label: "", path: "/" }]);
    }, []);

    return (
        <main className="">
            <Hero
                eyebrow="COGXP by COGAI®"
                title="Human Experience Planning"
                description="
                    A free workshop card tool for helping teams
                    discuss hidden human experience risks before
                    they become product problems.
    "
                ctaText="Start Workshop"
                ctaClick={() => navigate("/workshop")}
            />
            <section className="container">
                <p>
                    Human Experience Planning
                </p>


            </section>
        </main>
    );
}