// src/components/RoundsList.jsx
import React from "react";
import { rounds } from "../data/rounds";
import RoundCard from "./RoundCard";

export default function RoundsList() {
  return (
    <section style={{ padding: "28px 48px" }}>
      <h3 style={{ color: "#1f6ee0", marginBottom: 16 }}>Rounds</h3>
      <div className="rounds-grid">
        {rounds.map((r) => (
          <RoundCard key={r.id} round={r} />
        ))}
      </div>
    </section>
  );
}
