// Write all the code here

import React from "react";
import Menu from "./Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div>
        <h1>OLD CODE BURGER SHOP</h1>
        <p>Home of the burgers you break your code for!</p>
      </div>
      <a href="/menu">Burger Menu</a>
    </div>
  );
}

export default Home;
