"use client";
import { motion } from "framer-motion";
export default function Basics() {
  return (
    <div className="overflow-hidden">
      <h2>this is basic page @</h2>
      <motion.div
        initial={{
          rotate: "180deg",
        }}
        animate={{ rotate: "0deg" }}
        transition={{
          duration: 1,
          type: "spring",
        }}
        className="flex justify-center items-center h-screen"
      >
        <div className="border-2 bg-gray-600 w-[400px] rounded-xl p-2">
          <h2 className="text-4xl font-bold">make center</h2>
          <ul>
            <li>Image</li>
            <li>Title</li>
            <li>Description</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
