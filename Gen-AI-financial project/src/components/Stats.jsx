import React from "react";

const Stats = () => {
  return (
    <section className="stats">
      <div className="gradient-bg-stats"></div>

      <div className="container">
        <div className="stats-card">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value text-gradient">99.9%</div>
              <div className="stat-label">Accuracy Rate</div>
            </div>

            <div className="stat-item">
              <div className="stat-value text-gradient">10ms</div>
              <div className="stat-label">Response Time</div>
            </div>

            <div className="stat-item">
              <div className="stat-value text-gradient">24/7</div>
              <div className="stat-label">AI Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
