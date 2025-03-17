import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-darkBlue flex items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold">SANKALAN</h1>
        <p className="mt-4 text-xl">Celebrating 20 Years of Innovation</p>
      </motion.div>
    </div>
  );
};

export default HeroSection;
