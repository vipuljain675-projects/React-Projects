import React from "react";

const Footer = () => {
  return (
    <footer>
      <h2>Stay Updated</h2>
      <p>
        Subscribe to our newsletter for exclusive deals, new releases, and
        special offers
      </p>
      <div className="subscribe">
        <input type="email" placeholder="Enter your email" />
        <button className="btn primary">Subscribe</button>
      </div>
      <p className="small">© 2025 Cinema Tickets. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
