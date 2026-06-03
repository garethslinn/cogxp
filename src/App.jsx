import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import WorkshopPage from "./pages/WorkshopPage";
import DecksPage from "./pages/DecksPage";

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>

                    <Route
                        path="/"
                        element={<Dashboard />}
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
    );
}