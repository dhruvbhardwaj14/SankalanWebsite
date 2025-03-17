import { motion } from "framer-motion";

const StatsCounter = () => {
  const stats = [
    { label: "Years", value: 20 },
    { label: "Events", value: 100 },
    { label: "Participants", value: 5000 },
  ];

  return (
    <div className="flex justify-center gap-8 my-12">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center p-6 bg-darkBlue text-white rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <h3 className="text-4xl font-bold">{stat.value}+</h3>
          <p className="text-lg">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCounter;
