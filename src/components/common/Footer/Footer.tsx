import React from "react";
import "./Footer.css";

export const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Footer">
      <span className="footer-content">
        &copy; <span id="year">{year}</span>{" "}
      </span>
      <span className="footer-content">
        Romanyk Yulia. All rights reserved.
      </span>
    </footer>
  );
};
