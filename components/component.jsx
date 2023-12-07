"use client";
import { motion } from "framer-motion";
export default function Component({ reference }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        // whileDrag={{ scale: 1.2 }}
        whileDrag={{ color: "red", scale: "1.2", font: "bold" }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 5 }}
        className="border-2 w-[300px] p-10 m-10 rounded-lg bg-sky-500"
      >
        <ul className="bg-red-500 border-2 rounded-lg text-2xl p-2 ">
          <li>this is image section</li>
          <li>this is title section</li>
          <li>this is description section</li>
        </ul>
      </motion.div>
    </>
  );
}
