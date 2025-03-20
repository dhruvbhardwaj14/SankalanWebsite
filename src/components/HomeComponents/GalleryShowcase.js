import React, { useState } from "react";
import "../../styles/GalleryShowcase.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import pic from "../../assets/PNG/SankalanAbout.png"
// Gallery Data
const galleryItems = [
  {
    src: pic,
    title: "AI Hackathon",
    caption: "Participants collaborating during the AI Hackathon.",
  },
  {
    src: pic,
    title: "Tech Talks",
    caption: "Insights from industry leaders on the latest tech trends.",
  },
  {
    src: pic,
    title: "AI Art Workshop",
    caption: "Creative exploration of AI-powered art and design.",
  },
  {
    src: pic,
    title: "Panel Discussion",
    caption: "Engaging panel discussion on AI ethics and policies.",
  },
  {
    src: pic,
    title: "Gaming Arena",
    caption: "Exciting AI-driven gaming experiences for participants.",
  },
  {
    src: pic,
    title: "Robotics Showcase",
    caption: "Cutting-edge robotics projects on display.",
  },
];

const GalleryShowcase = () => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const slides = galleryItems.map((item) => ({
    src: item.src,
    title: item.title,
    description: item.caption,
  }));

  const handleClick = (index) => {
    setPhotoIndex(index);
    setOpen(true);
  };

  return (
    <section className="gallery-showcase">
      <h2>
        Gallery <span>/ Showcase</span>
      </h2>

      {/* Masonry Grid Layout */}
      <div className="masonry-grid">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="grid-item"
            onClick={() => handleClick(index)}
          >
            <img src={item.src} alt={item.title} />
            <div className="caption-overlay">
              <h3>{item.title}</h3>
              <p>{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox for Fullscreen Preview */}
      {open && (
        <Lightbox
          slides={slides}
          index={photoIndex}
          open={open}
          close={() => setOpen(false)}
        />
      )}
    </section>
  );
};

export default GalleryShowcase;
