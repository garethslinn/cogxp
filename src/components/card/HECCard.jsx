import React from "react";

const CategoryIcon = ({ name }) => {
    switch (name) {
        case "Understanding":
            return (
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 50 50">
                      <g fill="#fff" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="0" paint-order="fill markers stroke">
                        <path d="M20 41h10a2 2 0 1 1 0 3H20a2 2 0 1 1 0-3m-1-4h11a2 2 0 1 1 0 4H19a2 2 0 1 1 0-4m2 7a4 4 0 0 0 4 5 4 4 0 0 0 4-5zM18 3q-8 4-9 13c0 10 9 13 10 22v-1h12c1-8 9-11 9-21q-1-8-7-13-7-4-15 0"/>
                          <path d="M29 6q8 6 7 12"/>
                      </g>
                    </svg>
            )

        case "Memory":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 50 50">
                  <g fill="#fff" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="0" paint-order="fill markers stroke">
                    <path d="m27 36 3-2q7 0 5 6-3 2-7 1-3-2-1-5m2 7q0 0 0 0h2q2 4-3 4l-1-1q-2-3 2-3m-6 3h1q0 0 0 0t0 0l1 1q-3 4-4 0zq0 0 0 0t0 0"/>
                      <path d="M8 17Q3 7 13 9C23-5 31 5 30 8c10-6 21 5 11 14 7 15-9 13-12 9-5 3-11 8-17-2-6-1-12-4-4-12"/>
                  </g>
                </svg>
            );

        case "Attention":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 50 50">
                  <g paint-order="fill markers stroke">
                    <path fill="#fff" d="M17 30V9c0-4 5-4 6-1V5c0-2 5-4 6 0v4c1-4 6-4 6 0v4q5-6 6 1v19q-2 13-15 14-8-3-14-11L7 26q1-6 6-4z"/>
                      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="0" d="M17 30V9c0-4 5-4 6-1V5c0-2 5-4 6 0v4c1-4 6-4 6 0v4q5-6 6 1v19q-2 13-15 14-8-3-14-11L7 26q1-6 6-4zm6-22-1 15m7-16v16m6-11v12"/>
                  </g>
                </svg>
            );

        case "Decisions":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 50 50">
                  <path fill="#fff" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="0" d="m17 2 25 3 6 24h0l-6-6-6 7q0 0 0 0L19 16q0 0 0 0l6-7zm17 47L9 46 3 22h0l6 6 6-7q0 0 0 0l17 14q0 0 0 0l-6 7z" paint-order="fill markers stroke"/>
                </svg>
            );

        case "Navigation":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 50 50">
                  <g paint-order="fill markers stroke">
                    <ellipse cx="25.1" cy="25.2" fill="#fff" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="0" rx="16.5" ry="16"/>
                      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="0" d="m23 9 2-7 3 7m-5 32 2 7 3-7m13-18 7 2-7 3M8 23l-6 2 7 3m7-4 16-6-6 16-2-7z"/>
                      <g transform="translate(0,-1.0583333)">
                      <rect width="1.1" height="3.7" x="25" y="12" rx=".1" ry=".1"/>
                          <rect width="1.1" height="3.7" x="25" y="37" rx=".1" ry=".1"/>
                    </g>
                      <g transform="rotate(90,25.870777,25.751285)">
                      <rect width="1.1" height="3.7" x="25" y="12" rx=".1" ry=".1"/>
                          <rect width="1.1" height="3.7" x="25" y="37" rx=".1" ry=".1"/>
                    </g>
                  </g>
                </svg>
            );

        default:
            return <circle cx="50" cy="50" r="35" fill="#fff" />;
    }
};

export default function HECCard({
    theme = "#47619C",
    name = "Understanding",
    cardTitle = "Title",
    cardText = "Description"
}) {
    return (
        <article className="he-card" style={{ "--theme": theme }}>
            <svg className="he-card-svg" viewBox="0 0 850 1200" aria-hidden="true" focusable="false">
                <rect x="25" y="25" width="800" height="1150" rx="60" fill={theme} />
                <rect x="60" y="350" width="730" height="800" rx="40" fill="#fff" />
            </svg>

            <div className="he-card-icon" aria-hidden="true">
                <svg viewBox="0 0 100 100" focusable="false">
                    <CategoryIcon name={name} />
                </svg>
            </div>

            <div className="he-card-category">{name}</div>
            <h3 className="he-card-title">{cardTitle}</h3>
            <p className="he-card-description">{cardText}</p>
        </article>
    );
}
