// src/App.js
import React from "react";
import { Products } from "./components/Products";
import contents from "./contentData/content";
import siteOptions from "./contentData/siteOption";
import CoverPage from "./components/cover_page";
import FooterDetails from "./components/footer_details";

export default function App() {
  return (
    <>
      {/* Render Cover Page */}
      {siteOptions.map(option => (
        <CoverPage
          key={option.id}
          image={option.image}
          siteName={option.siteName}
          description={option.description}
          siteLink={option.siteLink}
        />
      ))}

      {/* Render Product List */}
      <div className="AppContainer">
        {contents.map(item => (
          <Products
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            appLink={item.appLink}
            rating={item.rating}
            timeLeft={item.timeLeft}
          />
        ))}
      </div>

      {/* Footer */}
      {siteOptions.length > 0 && (
        <FooterDetails siteName={siteOptions[0].siteName} />
      )}
    </>
  );
}
