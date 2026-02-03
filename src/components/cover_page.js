// src/components/cover_page.js
import React from "react";

const CoverPage = ({ image, siteName, description, siteLink }) => {
  return (
    <section className="coverPage">
      <img src={image} alt={`${siteName} logo`} className="cover-image" />
      <h1>{siteName}</h1>
      <p>{description}</p>
      <a href={siteLink} target="_blank" rel="noopener noreferrer">Visit Site</a>
    </section>
  );
};

export default CoverPage;
