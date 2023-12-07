"use client";
import { motion } from "framer-motion";
const Guesture = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
      }}
    >
      <h2>Welcome to guesture</h2>
      <motion.button
        whileHover={{ scale: 1.2, margin: "10px", rotate: "2.5deg" }}
        whileTap={{ color: "red", rotate: "2.5deg" }}
        className="bg-green-900 text-3xl font-bold rounded-xl"
      >
        click me
      </motion.button>
    </div>
  );
};

export default Guesture;
