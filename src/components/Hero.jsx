// src/components/Hero.jsx
import React from "react";
import logo from "../assets/logo.svg";
import mascot from "../assets/mascot.png";

export default function Hero() {
  return (
    <section className="left-column">
      <div className="hero">
        <div className="hero-header">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className="hero-content">
          {/* text block */}
          <div className="hero-text">
            <div className="lede">Every Second</div>
            <h1 className="matters">MATTERS</h1>
            <div className="subtitle">In Crypto</div>

            <div className="hero-footer">
              <div>READ FAST</div>
              <div>REACT FAST</div>
              <div>GET REWARDED</div>
            </div>
          </div>

          {/* mascot block */}
          <div className="hero-mascot-wrap">
            <img src={mascot} alt="mascot" className="mascot" />
          </div>
        </div>
      </div>
    </section>
  );
}
