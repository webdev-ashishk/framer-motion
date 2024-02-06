import { motion } from "framer-motion";
const Lecture1 = () => {
  return (
    <div>
      lecture-1 : Text animation ...
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 100, opacity: 1 }}
        transition={{
          duration: "1",
          delay: "1",
        }}
        className="text-[100px] font-bold text-blue-400"
      >
        This Text Came from Left !s
      </motion.h1>
      <motion.h1
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: [900, 700], opacity: 1 }}
        transition={{
          duration: 2,
          delay: 1,
        }}
        whileHover={{ scale: 0.6, opacity: 0.4 }}
        className="text-[50px] font-bold text-purple-400 px-10 my-4"
      >
        This text came from right !
      </motion.h1>
    </div>
  );
};
export default Lecture1;
