// src/components/BuyCard.jsx
import React from "react";
import cardBg from "../assets/Subtract.svg";        // background SVG for card
import bananaIcon from "../assets/banana.svg";
import progressSvg from "../assets/progress-bar.svg";
import usdtLogo from "../assets/usdt.svg";
import visaLogo from "../assets/visa.svg";
import masterCardLogo from "../assets/mastercard.svg";

export default function BuyCard() {
  return (
    <aside className="right-column">
      <div className="buy-card">
        {/* background SVG (positioned absolutely) */}
        <img src={cardBg} alt="" className="card-bg" />

        {/* card inner sits above background (z-index: 2 in your CSS) */}
        <div className="card-inner">
          <div className="card-header">
            <div className="card-title">300,000 BANANA</div>
          </div>

          <div className="progress-row">
            <div className="progress-pill">Remaining Tokens: XXXXX</div>
            <div className="progress-track" />
            <div style={{ fontSize: 13, color: "#666", marginTop: 6 }}>
              Remaining: 200,000 | Sold: 100,000
            </div>
          </div>

          <div className="prices-grid">
            {["$20", "$60", "$140", "$300", "$500", "$1000"].map((p, i) => (
              <div className="price-item" key={p}>
                <img src={bananaIcon} alt="banana" className="banana-icon" />
                <div className="price-label">{p}</div>
              </div>
            ))}
          </div>

          <div className="exchange-row">
            <div className="small-label">Pay</div>
            <div className="small-label">Receive</div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 6 }}>
            <div className="pill"><img src={usdtLogo} style={{ height: 20 }} alt="usdt" /> USDT</div>
            <div className="pill">CIN1</div>
          </div>

          <div className="payment-methods">
            <img src={usdtLogo} alt="usdt" className="method" />
            <img src={visaLogo} alt="visa" className="method" />
            <img src={masterCardLogo} alt="mastercard" className="method" />
          </div>

          <div className="card-actions">
            <button className="btn-primary">Connect Wallet/Buy</button>
            <button className="btn-ghost">Login</button>
          </div>
        </div>
      </div>
    </aside>
  );
}    