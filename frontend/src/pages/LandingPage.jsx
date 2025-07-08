import React from 'react';
import '../styles/LandingPage.css';

export default function LandingPage() {
  return (
    <div className="murus-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Murus: Automate Your Compliance</h1>
        <p>Secure your organization with AI-driven policies, audits, and roadmaps</p>
        <button className="hero-btn">Start Today</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>AI Guard</h3>
          <p>Pose compliance queries and receive vigilant, expert answers instantly.</p>
        </div>
        <div className="feature-card">
          <h3>Policy Forge</h3>
          <p>Craft SOC 2, ISO, HIPAA and more with a single command.</p>
        </div>
        <div className="feature-card">
          <h3>Roadmap Citadel</h3>
          <p>Assess your stance and receive a step-by-step fortress plan.</p>
        </div>
      </section>

      {/* Phases Preview */}
      <section className="phases">
        <h2>346 Days to Build Your Walls</h2>
        <div className="phase-list">
          <div>
            <h4>Phase 1: Stronghold (0–2 Months)</h4>
            <p>Core AI guard, policy forge, and initial intake tools.</p>
          </div>
          <div>
            <h4>Phase 2: Bulwark (2–4 Months)</h4>
            <p>Custom profiles, persistent vault, and document RAG.</p>
          </div>
          <div>
            <h4>Phase 3: Citadel (4–6 Months)</h4>
            <p>Cloud integrations, risk registers, auto-audit sentinels.</p>
          </div>
          <div>
            <h4>Phase 4: Fortress (6–9 Months)</h4>
            <p>Enterprise dashboard, multi-tenant ramparts, advanced training.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <h2>Defense Tiers</h2>
        <div className="pricing-cards">
          <div className="card keep">
            <h3>Keep</h3>
            <p>$0/mo</p>
            <ul>
              <li>Basic AI Guard</li>
              <li>1 Policy Forge</li>
            </ul>
            <button>Enlist Free</button>
          </div>
          <div className="card bastion">
            <h3>Bastion</h3>
            <p>$29/mo</p>
            <ul>
              <li>Full AI Guard + Roadmap Citadel</li>
              <li>5 Policy Forges</li>
            </ul>
            <button>Fortify Now</button>
          </div>
          <div className="card citadel">
            <h3>Citadel</h3>
            <p>$99/mo</p>
            <ul>
              <li>Training Ramparts</li>
              <li>Integrations & Auto-Audits</li>
            </ul>
            <button>Secure Shield</button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Raise Your Walls?</h2>
        <button>Forge Your Murus Now</button>
      </section>

      <footer className="footer">
        © 2025 Murus. All rights reserved.
      </footer>
    </div>
  );
}