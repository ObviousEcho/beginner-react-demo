import React from "react";

import Button from "./Button";
import classes from "./Card.module.css";

// Utilizing Javascript Destructuring to store our inventory array
// from the props object, in a variable named "inventory":
// ===============================================================

const Card = ({ inventory }) => {
  console.log(inventory);
  return (
    <div className={classes.cardBox}>
      {inventory.map((product) => (
        <div className={classes.card} key={product.id}>
          <h2>Sale!</h2>
          <h3>{product.department}</h3>
          <div className={classes.photo}>
            <img src={product.imagePath} alt={product.imageAlt} />
          </div>
          <h4>{product.discount} off!</h4>
          {/* Prop Drilling:  passing "product.discount" from the map method
          into the Button component. */}
          <Button discount={product.discount} />
        </div>
      ))}
    </div>
  );
};

export default Card;
