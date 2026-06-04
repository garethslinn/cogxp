import Header from "../components/Headers";
import Breadcrumb from "./Breadcrumb";


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
            <Breadcrumb />

            <main
                id="main-content"
            >
                {children}
            </main>

        </>

    );
}