import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

function DropdownMenu() {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [
      { name: "Login", path: "/login" },
      { name: "Orders", path: "/myorders" },
      { name: "Logout", path: "/login" },
    ];
    setNavLinks(navs);
  }, []);

  return (
    <div>
      <Menu right isOpen={false}>
        <Link to="/login">Login</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/login">Logout</Link>
      </Menu>
    </div>
  );
}

export default DropdownMenu;
