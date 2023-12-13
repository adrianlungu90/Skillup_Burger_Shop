import React from "react";

function OrderItem({ name, quantity, price }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>
        {quantity}*{price}
      </p>
    </div>
  );
}

export default OrderItem;
