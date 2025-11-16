import React, { useEffect } from "react";

const Features = () => {
  // Simple observer logic
  useEffect(() => {
    const cards = document.querySelectorAll(".feature-card");
    const observer = new IntersectionObserver((items) => {
      items.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("fade-in");
      });
    });

    cards.forEach((card) => {
      card.classList.remove("fade-in");
      observer.observe(card);
    });
  }, []);

  return (
    <section className="features">
      <div className="container">
        <div className="section-header">
          <h2>
            Powered by <span className="text-gradient">Generative AI</span>
          </h2>
          <p className="section-description">
            Experience the future of financial services with AI-driven solutions
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                <path d="M12 12l7.07-7.07A10 10 0 0 1 12 22V12z" />
              </svg>
            </div>
            <h3>AI-Powered Analytics</h3>
            <p>
              Advanced machine learning models analyze financial data in
              real-time.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </div>
            <h3>Predictive Forecasting</h3>
            <p>AI predicts market trends with precision.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3>Risk Assessment</h3>
            <p>Intelligent AI to evaluate financial risks.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <h3>Instant Processing</h3>
            <p>Lightning-fast transaction analysis & fraud detection.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
