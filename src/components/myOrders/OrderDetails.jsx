import React from "react";
import OrderItem from "./OrderedItems";
import NavigationBar from "../layout/Header";

function OrderDetails() {
  return (
    <div>
      <NavigationBar />
      <div className="orderDetails">
        <main>
          <h1>ORDER DETAILS</h1>
          <div>
            <h1>SHIPPING</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <h1>cONTACT</h1>
            <p>Gigi Forotic</p>
            <p> Phone 0040 727 221 141</p>
          </div>
          <div>
            <h1>STATUS</h1>
            <p>Order Status : Processing</p>
            <p>Placed at : 14.12.2023 </p>
            <p>Delivery : pending </p>
          </div>
          <div>
            <h1>PAYMENT</h1>
            <p>Payment Metod : COD</p>
            <p>Payment Ref : 49856198qwas8fd</p>
            <p>Payed at : 14.12.2023 </p>
          </div>
          <div>
            <h1>AMOUNT</h1>
            <p>Items total : ₹2132 </p>
            <p>Shipping Charges : ₹210 </p>
            <p>Taxes: ₹21</p>
            <p>Total: ₹2363</p>
          </div>
          <article>
            <h1>ORDERED ITEMS</h1>
            <OrderItem name="Chese Burger" quantity={5} price={225} />
            <OrderItem name="Vegetable Chese Burger" quantity={1} price={245} />
            <OrderItem name="Burger Fries" quantity={6} price={150} />
            <div>
              <b>Sub Total</b>
              <p>2132</p>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}

export default OrderDetails;
