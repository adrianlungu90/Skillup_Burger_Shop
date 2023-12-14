// Write all the code here
import React from "react";
import Founder from "../home/Founder";
import { CiSearch } from "react-icons/ci";
import NavigationBar from "../layout/Header";
function About() {
  return (
    <div className="about">
      <NavigationBar />
      <main>
        <h1>ABOUT US</h1>
        <article>
          <h4>OLD CODE BURGER SHOP</h4>
          <p>
            Writting code is a tireing bussiness. Indulge your many breaks from
            writting bad code and Indulge in one of our finest selection of
            burgers this side of the Metaverse
          </p>
          <p>
            Our wide menu of hamburgers can satisfy the most pretencious of
            programers, be them full stack engineers, DevOps or even Systems
            engineers
          </p>
          <a href="">
            <CiSearch />
          </a>
        </article>

        <Founder />
      </main>
    </div>
  );
}

export default About;
