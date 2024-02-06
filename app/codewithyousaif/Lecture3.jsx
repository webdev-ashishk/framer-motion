import { motion } from "framer-motion";
function Lecture3() {
  return (
    <div className="flex mx-6 gap-3">
      lecture-3: Drag...
      <motion.div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "red",
          borderRadius: "50%",
        }}
        drag
      >
        drag anywher
      </motion.div>
      <motion.div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "red",
          borderRadius: "50%",
          marginTop: "50px",
        }}
        drag="y"
      >
        drag in Y
      </motion.div>
      <motion.div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "red",
          borderRadius: "50%",
          marginTop: "50px",
        }}
        drag
        dragConstraints={{ left: 0, right: 20, top: 20, bottom: 0 }}
      >
        drag in constraints
      </motion.div>
    </div>
  );
}
export default Lecture3;
