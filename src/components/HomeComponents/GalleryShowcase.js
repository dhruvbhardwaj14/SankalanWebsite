import React, { useState } from "react";
import "../../styles/GalleryShowcase.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import seminar from "../../assets/PNG/seminar.png"
import dance from "../../assets/PNG/dance.png"
import host from "../../assets/PNG/host.png"
import debate from "../../assets/PNG/debate.png"
import laugh from "../../assets/PNG/laugh.png"
import squad from "../../assets/PNG/squad.png"
// Gallery Data
const galleryItems = [
  {
    src: dance,
    title: "Dancing to the rythm of teamwork",
    caption: "Pure fire on stage with unstoppable moves",
  },
  {
    src: host,
    title: "Mic check,energy set,let's go",
    caption: "Dynamic duo lightning up the event with high vibes.",
  },
  
  {
    src: laugh,
    title: "Making memories one laugh at a time!",
    caption: "Pure laughter that spreads good energy.",
  },
  {
    src: debate,
    title: "Discuss.Debate.Discover",
    caption: "A vibrant exchange of ideas and solutions.",
  },
  {
    src: seminar,
    title: "Fueling minds, sparking ideas",
    caption: "Absorbing knowledge to shape a brighter future.",
  },
  
  {
    src: squad,
    title: "Happiness looks good on us",
    caption: "A squad that knows how to have a good time.",
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
