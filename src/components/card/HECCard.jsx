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

        case "Vision":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 50 50">
                  <g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="0" paint-order="fill markers stroke">
                    <ellipse cx="25" cy="25.2" fill="#fff" stroke-width="1.3" rx="23.5" ry="13.5"/>
                      <ellipse cx="25" cy="25.2" fill="#fff" rx="14.2" ry="13.6"/>
                      <ellipse cx="25" cy="25.2" fill="#1a1a1a" stroke-width=".5" rx="7" ry="6.8"/>
                      <path fill="#fff" d="m22 9-2-8h6l-2 8Zm5 0 2-7h4l-3 7zm-8 1-2-8h-5l5 8zm4 31 3 8h-6l1-8zm-4 0-3 7h-4l3-7zm7-1 2 8h5l-4-8z"/>
                  </g>
                </svg>
            );

        case "Hearing":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 50 50">
                  <g fill="#fff" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="0" paint-order="fill markers stroke">
                    <path d="M37 4v42L13 32l-2-1c-3-1-4-10 1-12z"/>
                      <ellipse cx="37.2" cy="25.1" rx="10.6" ry="20.7"/>
                      <ellipse cx="37.7" cy="25.1" rx="8.2" ry="17"/>
                      <path d="M7 20q-5 0-6 4v3q1 4 6 4h2q-5-5 0-11z"/>
                  </g>
                </svg>
            );

        case "Interaction":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 50 50">
                  <g fill="#fff" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="0" paint-order="fill markers stroke">
                    <circle cx="18.6" cy="16.8" r="14"/>
                      <circle cx="18.6" cy="16.8" r="8.6"/>
                      <path d="M16 33c0-3-2-20 3-21q3 2 3 6l-1 11v-1c1-3 6-4 7 0l-1-1c2-3 7-2 7 1h0c1-2 6-4 6 1v7q0 7-3 10H17l-7-13q-3-9 2-7 4 4 4 7"/>
                  </g>
                </svg>
            );

        case "Communication":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 50 50">
                    <path fill="purple" stroke="#1a1a1a" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="0" stroke-width="4" d="m42 40 4 6-6-1-6-2 6-2Z" paint-order="fill markers stroke"/>
                    <ellipse cx="-32" cy="30.4" paint-order="fill markers stroke" rx="16.9" ry="15.2" transform="scale(-1,1)"/>
                    <ellipse cx="-32" cy="30.4" fill="#fff" paint-order="fill markers stroke" rx="15.2" ry="13.6" transform="scale(-1,1)"/>
                    <path d="M41 24H24v2h17zm0 5H24v2h17zm0 5H24v2h17Z" paint-order="fill markers stroke"/>
                    <path fill="#fff" d="M43 39q0 6 3 7-6 1-11-3l5-2z" paint-order="fill markers stroke"/>
                    <path fill="purple" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="0" stroke-width="4" d="M9 29q0 5-4 6h2l8-3-3-3z" paint-order="fill markers stroke"/>
                    <ellipse cx="19.6" cy="18.6" paint-order="fill markers stroke" rx="16.9" ry="15.2"/>
                    <ellipse cx="19.6" cy="18.6" fill="#fff" paint-order="fill markers stroke" rx="15.2" ry="13.6"/>
                    <path d="M11 12h17v2H11Zm0 6h17v1H11Zm0 5h12v2H11Z" paint-order="fill markers stroke"/>
                    <path fill="#fff" d="M9 28q0 4-4 7 6 0 12-4l-5-2z" paint-order="fill markers stroke"/>
                </svg>
            );

        case "Adaptation":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 50 50">
                  <g paint-order="fill markers stroke">
                    <path fill="#fff" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="0" d="M22 2v6l-7 3-4-4-4 4 4 4-3 7H2v6h6l3 7-4 4 4 4 4-4 7 3v6h6v-6l7-3 4 4 4-4-4-4 3-7h6v-6h-6l-3-7 4-4-4-4-4 4-7-3V2z"/>
                      <circle cx="25.1" cy="25" r="13.4" fill="#fff" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="0"/>
                      <path d="M18 17h15v2H18z"/>
                      <path d="M28 15h3v5h-3zM18 31h15v2H18z"/>
                      <path d="M19 30h3v5h-3zm-1-6h15v2H18z"/>
                      <path d="M24 23h3v5h-3z"/>
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
