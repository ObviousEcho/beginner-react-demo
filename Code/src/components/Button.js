import React from "react";

// Utilizing JavaScript destructuring to receive "discount" from the props object.
const Button = ({ discount }) => {
  return (
    <div className="btnContainer">
      <button className="btn">Shop {discount} off now</button>
    </div>
  );
};

export default Button;
