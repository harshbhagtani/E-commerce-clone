import React, { useEffect, useState } from "react";
import "./subtotal.css";
function SubTotal({ data }) {
  const [sum, setsum] = useState(0);

  useEffect(() => {
    let s1 = 0;
    data.basketItems.forEach((item) => {
      s1 += item.price;
    });

    setsum(s1);
  }, [data]);

  return (
    <div className="subtotal">
      <p>
        <b>SubTotal</b> ({data.basketItems.length} items) : $ {sum}
      </p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input type="checkbox"></input>
        <span style={{ marginLeft: "5px", fontSize: "12px" }}>
          This order contain a gift
        </span>
      </div>

      <div>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default SubTotal;
