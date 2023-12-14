// Write all the code here

import React from "react";

import NavigationBar from "../layout/Header";

function Home() {
  return (
    <div>
      <NavigationBar />
      <div className="home">
        <div>
          <h1>OLD CODE BURGER SHOP</h1>
          <p>Home of the burgers you break your code for!</p>
        </div>
        <a href="/menu">Burger Menu</a>
      </div>
    </div>
  );
}

export default Home;
