import React, { useEffect, useState } from "react";
import "./order.css";
import OrderTile from "./OrderTile";

function Orders({ doc }) {
  const [orders, setOrders] = useState([]);
  const [listner, setListner] = useState(0);
  useEffect(() => {
    if (!doc) return;

    doc.ref
      .collection("orders")
      .get()
      .then((snapshot) => {
        const data = [];
        snapshot.forEach((doc) => {
          let productDetails = { ...doc.data() };
          productDetails.id = doc.id;
          productDetails.ref = doc.ref;
          data.push(productDetails);
        });
        setOrders([...data]);
      });
  }, [doc, listner]);

  //console.log(orders);
  return (
    <div className="orders">
      {orders.length > 0 ? (
        <div className="contain">
          <h2 style={{ fontSize: "30px", fontWeight: "500" }}>Your orders</h2>
          {orders.map((data) => {
            return (
              <OrderTile
                data={data}
                doc={doc}
                listner={listner}
                setListner={setListner}
              ></OrderTile>
            );
          })}
        </div>
      ) : (
        <div>
          <h2>No active orders</h2>
        </div>
      )}
    </div>
  );
}

export default Orders;
