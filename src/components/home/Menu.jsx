// Write all the code here
import React from "react";
import MenuCard from "./MenuCard";
import NavigationBar from "../layout/Header";

let toCart = [];

function Menu() {
  return (
    <div>
      <NavigationBar />
      <div id="menu">
        <h1>Menu</h1>
        <div>
          <MenuCard
            itemNum={1}
            burgerSrc={
              "https://s23209.pcdn.co/wp-content/uploads/2022/07/220602_DD_The-Best-Ever-Cheeseburger_267-760x1140.jpg"
            }
            price={5}
            title={"Syntax Burger"}
          />
          <MenuCard
            itemNum={2}
            burgerSrc={
              "https://i0.wp.com/www.onceuponachef.com/images/2010/08/hamburgers.jpg?resize=575%2C754&ssl=1"
            }
            price={4.5}
            title={"Hackathon Burger"}
          />
          <MenuCard
            itemNum={3}
            burgerSrc={
              "https://www.foodserviceequipmentjournal.com/2018/09/Chinatown_ICHIBUNS-QR-Code-Burger.jpg"
            }
            price={6}
            title={"Code Breaker Burger"}
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
export { toCart };
