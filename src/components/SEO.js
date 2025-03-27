import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, image, url }) => {
  return (
    <Helmet>
      <title>{title || "Sankalan 2025 - DUCS, University of Delhi"}</title>
      <meta
        name="description"
        content={
          description ||
          "Sankalan 2025, the annual tech fest by the Department of Computer Science, University of Delhi, showcasing cutting-edge technology, AI, and more."
        }
      />
      <meta property="og:title" content={title || "Sankalan 2025"} />
      <meta property="og:description" content={description || "Sankalan 2025"} />
      <meta property="og:image" content={image || "%PUBLIC_URL%/sankalan-og-image.png"} />
      <meta property="og:url" content={url || "https://sankalan.cs.du.ac.in"} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default SEO;
