import React from "react";
import { connect, useDispatch } from "react-redux";
import "./checkout.css";
import Product from "./Product";
import SubTotal from "./SubTotal";

function Checkout({ basket, doc }) {
  console.log(basket);

  return (
    <div className="checkout">
      <div className="checkout-left">
        <div className="checkout-ad">
          <img src="https://gos3.ibcdn.com/bann-1553077574.jpg" />
        </div>
        <div className="checkout-cart">
          <h2 className="checkout-title">Your Shopping Basket</h2>
          <div>
            {basket.basketItems.length &&
              basket.basketItems.map((data) => {
                return <Product data={data} doc={doc} />;
              })}
          </div>
        </div>
      </div>
      <div className="checkout-right">
        <SubTotal data={basket} />
      </div>
    </div>
  );
}

function mapstatetoprops(state) {
  return {
    basket: state.basket,
  };
}

export default connect(mapstatetoprops)(Checkout);
