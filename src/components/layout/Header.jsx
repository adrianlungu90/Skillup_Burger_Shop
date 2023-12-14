// Write all the code here
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import DropdownMenu from "./DropdownMenu";

const NavigationBar = ({ isAuthenticated = false }) => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/cart">Shopping Cart</Link>
      </div>

      <DropdownMenu />
    </nav>
  );
};

export default NavigationBar;
