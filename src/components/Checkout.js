import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import "./checkout.css";
import FillAdress from "./FillAdress";
import OrderSuccess from "./OrderSuccess";
import Payment from "./Payment";
import Product from "./Product";
import SubTotal from "./SubTotal";

function Checkout({ basket, doc }) {
  console.log(basket);
  const [checkoutPage, setcheckoutPage] = useState(0);

  return (
    <>
      <div
        className="checkout"
        style={{ display: checkoutPage == 0 ? "flex" : "none" }}
      >
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
          <SubTotal data={basket} setcheckoutPage={setcheckoutPage} />
        </div>
      </div>
      <FillAdress
        display={checkoutPage == 1}
        setcheckoutPage={setcheckoutPage}
      />
      <Payment display={checkoutPage == 2} setcheckoutPage={setcheckoutPage} />
      <OrderSuccess
        display={checkoutPage == 3}
        setcheckoutPage={setcheckoutPage}
        doc={doc}
      />
    </>
  );
}

function mapstatetoprops(state) {
  return {
    basket: state.basket,
  };
}

export default connect(mapstatetoprops)(Checkout);
