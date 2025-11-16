import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="gradient-bg"></div>
      <div className="gradient-overlay"></div>
      <div className="floating-bubble bubble-1"></div>
      <div className="floating-bubble bubble-2"></div>

      <div className="container hero-content">
        <div className="badge">
          <svg
            className="icon-small"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          Gen AI for Financial Services
        </div>

        <h1 className="hero-title fade-in">
          Transform Finance with{" "}
          <span className="text-gradient">Intelligent AI</span>
        </h1>

        <p className="hero-description fade-in">
          Revolutionize financial decision-making with our cutting-edge
          generative AI platform.
        </p>

        <div className="button-group fade-in">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-outline">Watch Demo</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
