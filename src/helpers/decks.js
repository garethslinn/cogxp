const STORAGE_KEY = "cogxp-decks";

export const getDecks = () => {

    const saved =
        localStorage.getItem(STORAGE_KEY);

    return saved
        ? JSON.parse(saved)
        : [];

};

export const saveDecks = (decks) => {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(decks)
    );

};