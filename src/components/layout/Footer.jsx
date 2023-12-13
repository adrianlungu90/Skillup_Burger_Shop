// Write all the code here
import React from "react";
import { FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer>
      <h2>Old Code Burger Shop</h2>
      <p>We have the best burgers on the block, best taste guarantee</p>
      <p>
        We value customer feedback{" "}
        <strong>All rights reserved @Burger Shop</strong>
      </p>
      <aside>
        <h4> Follow us on :</h4>

        <IconContext.Provider
          value={{
            color: "white",
            className: "icons-class",
            size: "1em",
          }}
        >
          <a href="https://www.youtube.com/watch?v=ulhRORJpuBM">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/explore/tags/burgers/">
            {" "}
            <FaInstagram />
          </a>
          <a href="https://github.com/jonsuh/hamburgers">
            {" "}
            <FaGithub />
          </a>
        </IconContext.Provider>
      </aside>
    </footer>
  );
};

export default Footer;
