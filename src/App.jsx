// src/App.jsx
import React from "react";
import Hero from "./components/Hero";
import BuyCard from "./components/BuyCard";
import "./index.css"; // make sure index.css is imported somewhere (main.jsx ok too)

export default function App() {
  return (
    <div className="page">
      <Hero />
      <BuyCard />
    </div>
  );
}
