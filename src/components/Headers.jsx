import { Link, NavLink } from "react-router-dom";

export default function Header() {

    return (

        <header className="app-header">

            <div className="container">

                <div className="app-header-inner">

                    <Link
                        to="/"
                        className="app-logo"
                    >
                        COGXP
                    </Link>

                    <nav
                        aria-label="Main navigation"
                    >

                        <ul className="app-nav">

                            <li>

                                <NavLink
                                    to="/"
                                    end
                                >
                                    Home
                                </NavLink>

                            </li>

                            <li>

                                <NavLink
                                    to="/workshop"
                                >
                                    Workshop
                                </NavLink>

                            </li>

                            <li>

                                <NavLink
                                    to="/decks"
                                >
                                    Decks
                                </NavLink>

                            </li>

                            <li>

                                <NavLink
                                    to="/about"
                                >
                                    About
                                </NavLink>

                            </li>

                        </ul>

                    </nav>

                </div>

            </div>

        </header>

    );
}