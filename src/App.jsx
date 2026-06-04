import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home.jsx";
import WorkshopPage from "./pages/WorkshopPage";
import DecksPage from "./pages/DecksPage";
import { BreadcrumbProvider } from "./context/BreadcrumbContext";

export default function App() {
    return (
        <BreadcrumbProvider>
            <BrowserRouter>
                <Layout>
                    <Routes>

                        <Route
                            path="/"
                            element={<Home />}
                        />

                        <Route
                            path="/workshop"
                            element={<WorkshopPage />}
                        />

                        <Route
                            path="/decks"
                            element={<DecksPage />}
                        />

                        <Route
                            path="*"
                            element={<Navigate to="/" />}
                        />

                    </Routes>
                </Layout>
            </BrowserRouter>
        </BreadcrumbProvider>
    );
}