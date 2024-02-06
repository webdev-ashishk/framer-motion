import { motion, useScroll } from "framer-motion";

function Lecture5() {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      lec-5: scroll animation using framer motion ...
      <motion.div
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0%",
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          height: 10,
          background: "red",
        }}
      />
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
      <h1>this is simple h1 tag</h1>
    </div>
  );
}
export default Lecture5;
