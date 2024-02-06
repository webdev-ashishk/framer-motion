import { motion } from "framer-motion";
import { useState } from "react";

function Lecture4() {
  const [text, setText] = useState(false);
  const handleClicked = () => {
    setText(!text);
  };
  return (
    <div className="mr-56 flex flex-col justify-center px-96">
      lecture-4: Hover and Tap animation|| hover and click animation
      <motion.div
        whileInView={{
          rotate: 360,
        }}
        whileHover={{
          scale: 1.1,
        }}
        onClick={handleClicked}
        className="flex justify-center text-2xl font-bold mt-11 border-2 rounded-lg bg-purple-500 w-[600px]"
      >
        hover and click a div
        {text && (
          <div
            style={{
              width: "600px",
              borderRadius: "5%",
            }}
          >
            <br />
            this is true Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Velit laboriosam nulla officiis alias rem sit corporis libero.
            Corporis, quisquam velit!
          </div>
        )}
      </motion.div>
    </div>
  );
}
export default Lecture4;
