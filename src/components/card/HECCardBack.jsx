import React from "react";

export default function HECCardBack({ theme = "#47619C" }) {
    return (
        <svg className="he-card-back-svg" viewBox="0 0 850 1200" width="100%" aria-hidden="true" focusable="false">
            <rect x="25" y="25" width="800" height="1150" rx="60" fill={theme} />
            <rect x="70" y="70" width="710" height="1060" rx="40" fill="#5f84b0" opacity="0.42" />
            <rect x="180" y="170" width="490" height="750" rx="24" fill="#a1b7d0" opacity="0.5" />

            <circle cx="425" cy="545" r="180" fill="none" stroke="#a1b7d0" strokeWidth="8" />
            <circle cx="425" cy="545" r="140" fill="none" stroke="#a1b7d0" strokeWidth="8" />
            <circle cx="425" cy="545" r="100" fill="none" stroke="#a1b7d0" strokeWidth="8" />
            <circle cx="425" cy="545" r="60" fill="none" stroke="#a1b7d0" strokeWidth="8" />

            <circle cx="425" cy="545" r="96" fill="#5f84b0" stroke="#a1b7d0" strokeWidth="8" />
            <text x="425" y="560" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="42">COGXP</text>
            <text x="425" y="622" textAnchor="middle" fill="#fff" fontWeight="600" fontSize="24">by COGAI®</text>

            <circle cx="120" cy="1100" r="25" fill="none" stroke="#a1b7d0" strokeWidth="6" />
            <circle cx="425" cy="1100" r="25" fill="none" stroke="#a1b7d0" strokeWidth="6" />
            <circle cx="730" cy="1100" r="25" fill="none" stroke="#a1b7d0" strokeWidth="6" />
            <circle cx="120" cy="100" r="25" fill="none" stroke="#a1b7d0" strokeWidth="6" />
            <circle cx="730" cy="100" r="25" fill="none" stroke="#a1b7d0" strokeWidth="6" />
        </svg>
    );
}
