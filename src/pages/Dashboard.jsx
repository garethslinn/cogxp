import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <main className="container py-5">

            <h1>
                COGXP
            </h1>

            <p>
                Human Experience Planning
            </p>

            <div className="d-flex gap-3">

                <Link
                    className="btn btn-primary"
                    to="/workshop"
                >
                    Start Workshop
                </Link>

                <Link
                    className="btn btn-outline-primary"
                    to="/decks"
                >
                    Manage Decks
                </Link>

            </div>

        </main>
    );
}