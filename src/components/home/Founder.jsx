import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/skj.jpg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <h2>FOUNDER</h2>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Gigi Brogramer</h3>

        <p>
          Hey, Everyone I am Gigi, the founder of this burger shop
          <br />
          Our aim is to spend our money made by coding all day and maybe make
          some good burgers
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
