import Header from "../components/Headers";

export default function Layout({
                                   children
                               }) {

    return (

        <>
            <a
                href="#main-content"
                className="skip-link"
            >
                Skip to content
            </a>

            <Header />

            <main
                id="main-content"
            >
                {children}
            </main>

        </>

    );
}