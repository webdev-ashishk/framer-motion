import { motion } from "framer-motion";
function Lecture6() {
  return (
    <div>
      lec-6: Trigger scroll animation
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  );
}
function Box() {
  return (
    <div className="flex justify-center">
      <motion.div
        className="w-[800px] h-[200px] flex justify-center border-2 bg-blue-500 align-middle text-2xl font-bold mt-96 mr-9 pr-8"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        box are here
      </motion.div>
    </div>
  );
}
export default Lecture6;
