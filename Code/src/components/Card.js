import React from "react";

import Button from "./Button";

// Utilizing props traditionally by passing in the props object
// into our Card function as an argument:
// ============================================================

// const Card = (props) => {
//   const inventory = props.inventory;
//   console.log(inventory);
//   return (
//     <div className="cardBox">
//       {inventory.map((product) => (
//         <div className="card" key={product.id}>
//           <h2>Sale!</h2>
//           <h3>{product.department}</h3>
//           <div className="photo">
//             <img src={product.imagePath} alt={product.imageAlt} />
//           </div>
//           <h4>{product.discount} off!</h4>
//           {/* Prop Drilling:  passing "product.discount" from the map method
//           into the Button component. */}
//           <Button discount={product.discount} />
//         </div>
//       ))}
//     </div>
//   );
// };

// Utilizing Javascript Destructuring to store our inventory array
// from the props object, in a variable named "inventory":
// ===============================================================

const Card = ({ inventory }) => {
  console.log(inventory);
  return (
    <div className="cardBox">
      {inventory.map((product) => (
        <div className="card" key={product.id}>
          <h2>Sale!</h2>
          <h3>{product.department}</h3>
          <div className="photo">
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
