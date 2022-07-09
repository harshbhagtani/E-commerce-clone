import React from "react";
import "./order.css";

function OrderTile({ data, doc, setListner, listner }) {
  //console.log(data);

  const cancelOrder = () => {
    console.log(data.ref);
    data.ref.delete().then(() => {
      setListner(!listner);
    });
  };

  return (
    <div className="order-tile">
      <div className="tile-header">
        <div>
          <span style={{ fontSize: "12px" }}>Order Placed</span>
          <br></br>
          <span>{data.orderDate.substr(0, 15)}</span>
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>Order value</span>
          <br></br>
          <span>{data.product.price}$</span>
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>Ship to</span>
          <br></br>
          <span title={data.adress.homeAdress}>
            {data.adress.selectCity + "," + data.adress.selectCountry}
          </span>
        </div>
        <div style={{ marginLeft: "150px" }}>
          <span style={{ fontSize: "12px" }}>Order Id</span>
          <br></br>
          <span>#{data.id}</span>
        </div>
      </div>
      <h3>Arriving next week</h3>
      <div className="tile-content">
        <div className="title-content-left">
          <img src={data.product.thumbnail}></img>
        </div>
        <div className="title-content-right">
          <h3 style={{ fontSize: "18px", fontWeight: "500" }}>
            {data.product.brand}
          </h3>
          <p> {data.product.description}</p>
          <br></br>
          <p>Qty: 1</p>
          <p>Price: {data.product.price}</p>
        </div>
      </div>
      <button style={{ width: "100%" }} onClick={() => cancelOrder()}>
        Cancel Order
      </button>
    </div>
  );
}

export default OrderTile;
