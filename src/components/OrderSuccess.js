import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import checkMark from "../assets/checkMark.gif";
function OrderSuccess({ display, order, doc }) {
  const [remove, setremove] = useState(0);

  useEffect(() => {
    if (!display) return;

    setremove(0);
    setTimeout(() => {
      setremove(1);
      console.log(order);
      const date = new Date();
      const orderDate = date.toString();

      order.basketItems.forEach((item) => {
        console.log(item);
        const data = {
          orderDate,
          product: item,
          adress: order.adress,
        };

        doc.ref.collection("orders").add(data);
      });

      doc.ref
        .collection("cart")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            doc.ref.delete();
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }, 3000);
  }, [display]);

  return (
    <div style={{ display: display ? "block" : "none" }}>
      {remove ? (
        <div>
          <h2>Congratulations your order has been placed</h2>
        </div>
      ) : (
        <div>
          <h2>Processing....</h2>

          <div
            style={{
              borderRadius: "50%",
              marginTop: "150px",
              marginLeft: "300px",
            }}
          >
            <img src={checkMark} style={{ borderRadius: "50%" }}></img>
          </div>
        </div>
      )}
    </div>
  );
}

function mapstatetoprops(state) {
  return {
    order: state.basket,
  };
}

export default connect(mapstatetoprops)(OrderSuccess);
