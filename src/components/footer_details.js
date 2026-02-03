// src/components/footer_details.js
import React from "react";

const FooterDetails = ({ siteName }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">{siteName}</h2>
        <p className="footer-copy">&copy; 2024 Dexter Eskalarte. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterDetails;
