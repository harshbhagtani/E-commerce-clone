import React, { useState } from "react";
import addressBar from "../assets/checkout.gif";
import "./payment.css";

function Payment({ display, setcheckoutPage }) {
  const [paymentMethod, setpaymentMethod] = useState(0);

  const proceedPayment = (e) => {
    e.preventDefault();
    setcheckoutPage(3);
  };

  return (
    <div className="payment" style={{ display: display ? "block" : "none" }}>
      <div>
        <img src={addressBar}></img>
      </div>
      <h2 style={{ fontWeight: "500" }}>Select a payment method</h2>
      <div>
        <form>
          {" "}
          <div
            className="payment-div"
            style={{
              backgroundColor:
                paymentMethod == 0 ? "rgba(254, 187, 63,0.5)" : "white",
            }}
          >
            <input
              type="radio"
              name="payment"
              defaultChecked
              onChange={(e) => {
                setpaymentMethod(0);
              }}
            ></input>
            <p>Net Banking</p>
          </div>
          <div
            className="payment-div"
            style={{
              backgroundColor:
                paymentMethod == 1 ? "rgba(254, 187, 63,0.5)" : "white",
            }}
          >
            {" "}
            <input
              type="radio"
              name="payment"
              onChange={(e) => {
                setpaymentMethod(1);
              }}
            ></input>
            <p>UPI</p>
          </div>
          <div
            className="payment-div"
            style={{
              backgroundColor:
                paymentMethod == 2 ? "rgba(254, 187, 63,0.5)" : "white",
            }}
          >
            {" "}
            <input
              type="radio"
              name="payment"
              onChange={(e) => {
                setpaymentMethod(2);
              }}
            ></input>
            <p>Cash on delivery</p>
          </div>
          <div
            className="payment-div"
            style={{
              backgroundColor:
                paymentMethod == 3 ? "rgba(254, 187, 63,0.5)" : "white",
            }}
          >
            {" "}
            <input
              type="radio"
              name="payment"
              onChange={(e) => {
                setpaymentMethod(3);
              }}
            ></input>
            <p>Credit/Debit Card</p>
          </div>
          <button onClick={(e) => proceedPayment(e)}>Proceed to pay</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
