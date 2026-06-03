import { useState } from "react";

import {
    getDecks,
    saveDecks
} from "../helpers/decks";

export default function DecksPage() {

    const [decks, setDecks] =
        useState(getDecks());

    const createDeck = () => {

        const deck = {

            id:
                crypto.randomUUID(),

            name:
                "New Deck",

            description:
                "",

            cards: []

        };

        const updated = [
            ...decks,
            deck
        ];

        setDecks(updated);

        saveDecks(updated);

    };

    const deleteDeck = (id) => {

        const updated =
            decks.filter(
                d => d.id !== id
            );

        setDecks(updated);

        saveDecks(updated);

    };

    return (

        <main className="container py-5">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h1>
                    Decks
                </h1>

                <button
                    className="btn btn-primary"
                    onClick={createDeck}
                >
                    New Deck
                </button>

            </div>

            {!decks.length && (

                <p>
                    No decks created yet.
                </p>

            )}

            {decks.map(deck => (

                <div
                    key={deck.id}
                    className="card mb-3"
                >

                    <div className="card-body">

                        <h3>
                            {deck.name}
                        </h3>

                        <p>
                            {deck.description ||
                                "No description"}
                        </p>

                        <button
                            className="btn btn-danger"
                            onClick={() =>
                                deleteDeck(
                                    deck.id
                                )
                            }
                        >
                            Delete
                        </button>

                    </div>

                </div>

            ))}

        </main>

    );
}