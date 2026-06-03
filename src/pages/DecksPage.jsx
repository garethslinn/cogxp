import { useState } from "react";

import {
    getDecks,
    saveDecks
} from "../helpers/decks";

export default function DecksPage() {

    const [decks, setDecks] =
        useState(getDecks());

    const [name, setName] =
        useState("");

    const [description, setDescription] =
        useState("");

    const createDeck = () => {

        if (!name.trim()) {
            return;
        }

        const deck = {

            id:
                crypto.randomUUID(),

            name,

            description,

            cards: []

        };

        const updated = [
            ...decks,
            deck
        ];

        setDecks(updated);

        saveDecks(updated);

        setName("");
        setDescription("");

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

            <div className="card mb-4">

                <div className="card-body">

                    <h2>
                        Create Deck
                    </h2>

                    <div className="mb-3">

                        <label
                            htmlFor="deck-name"
                            className="form-label"
                        >
                            Deck Name
                        </label>

                        <input
                            id="deck-name"
                            className="form-control"
                            value={name}
                            onChange={e =>
                                setName(
                                    e.target.value
                                )
                            }
                        />

                    </div>

                    <div className="mb-3">

                        <label
                            htmlFor="deck-description"
                            className="form-label"
                        >
                            Description
                        </label>

                        <textarea
                            id="deck-description"
                            className="form-control"
                            rows="3"
                            value={description}
                            onChange={e =>
                                setDescription(
                                    e.target.value
                                )
                            }
                        />

                    </div>

                    <button
                        className="btn btn-primary"
                        onClick={createDeck}
                    >
                        Create Deck
                    </button>

                </div>

            </div>

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