// src/components/RoundCard.jsx
import React from "react";

export default function RoundCard({ round }) {
  return (
    <div className="round-card">
      <img src={round.img} alt={round.name} style={{ width: 72, height: 72 }} />
      <div style={{ marginTop: 8 }}>{round.name}</div>
    </div>
  );
}
