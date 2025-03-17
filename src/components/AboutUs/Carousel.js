import { motion } from "framer-motion";

const images = ["/images/event1.jpg", "/images/event2.jpg", "/images/event3.jpg"];

const Carousel = () => {
  return (
    <div className="overflow-hidden relative w-full h-96">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-100%", "-200%", "0%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {images.map((src, index) => (
          <img key={index} src={src} className="w-full h-96 object-cover" alt="Sankalan Event" />
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
