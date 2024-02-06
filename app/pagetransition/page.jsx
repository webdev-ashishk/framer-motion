"use client";
import { motion } from "framer-motion";
const PageTransition = () => {
  return (
    <motion.div
      className="border-2 rounded-lg text-purple-900 px-10 w-6/12 font-bold py-8 mt-28 text-2xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 5 }}
    >
      <h1>This is About Transiton Page !</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        nobis quo ipsum pariatur recusandae accusamus neque maxime consequuntur,
        eius aperiam ea dolorum, eaque error officiis amet nisi ratione
        blanditiis excepturi accusantium! Iste aliquam facilis ut vel minus,
        saepe commodi eum? Velit dolorum sapiente dolor ratione, in quibusdam
        earum fuga voluptatem.
      </p>
    </motion.div>
  );
};
export default PageTransition;
