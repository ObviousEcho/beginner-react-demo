import React from 'react';

import classes from "./Button.module.css";

// Utilizing JavaScript destructuring to receive "discount" from the props object.
const Button = ({ discount }) => {
  return (
    <div className={classes.btnContainer}>
      <button className={classes.btn}>Shop {discount} off now</button>
    </div>
  );
};

export default Button;
