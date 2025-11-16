import React from "react";

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <div className="cta-glow"></div>

          <h2>
            Ready to Transform Your
            <span className="text-gradient"> Financial Future?</span>
          </h2>

          <p>Join leading financial institutions leveraging AI</p>

          <div className="button-group">
            <button className="btn btn-primary">Schedule a Demo</button>
            <button className="btn btn-outline">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
