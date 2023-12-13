// Write all the code here
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import DropdownMenu from "./DropdownMenu";

const NavigationBar = () => {
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
      {/*       <div>
        <Menu right isOpen={false}>
          <Link to="/login">Login</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/login">Logout</Link>
        </Menu>
      </div> */}

      {/*  <menu type="toolbar">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </menu> */}
      <DropdownMenu />
    </nav>
  );
};

export default NavigationBar;
