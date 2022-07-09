import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import "./adress.css";

import addressBar from "../assets/checkout.gif";
import { updateAdress } from "../actions/action";

function FillAdress({ basket, display, setcheckoutPage }) {
  const [Country, setCountry] = useState([]);
  const [city, setCity] = useState([]);

  const [selectCountry, setselectCountry] = useState("");
  const [selectCity, setselectCity] = useState("");
  const [name, setName] = useState("");
  const [pin, setPin] = useState("");
  const [mobile, setMobile] = useState("");
  const [homeAdress, sethomeAdress] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    const url = "https://countriesnow.space/api/v0.1/countries/positions";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data.data);
        setselectCountry(data.data[0].name);
      });
  }, []);
  useEffect(() => {
    const url = "https://countriesnow.space/api/v0.1/countries/cities";
    const data = {
      country: selectCountry,
    };
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setCity(data.data));
  }, [selectCountry]);

  const submit = (e) => {
    e.preventDefault();
    if (selectCity && selectCountry && name && mobile && pin && homeAdress) {
      const adressData = {
        selectCity,
        selectCountry,
        name,
        mobile,
        pin,
        homeAdress,
      };

      dispatch(updateAdress(adressData));
      setcheckoutPage(2);
    } else {
      alert("!!!Please fill all the fields!!!");
    }
  };

  return (
    <div className="adress" style={{ display: display ? "block" : "none" }}>
      <div>
        <img src={addressBar}></img>
      </div>
      <h2>Provide a delivery adress</h2>
      <form className="address-container">
        <div>
          {" "}
          <label>Country/Region</label>
          <br></br>
          <select
            style={{ width: "400px", height: "30px" }}
            value={selectCountry}
            onChange={(e) => setselectCountry(e.target.value)}
            required
          >
            {Country &&
              Country.map((data) => {
                return <option value={data.name}>{data.name}</option>;
              })}
          </select>
        </div>

        <div>
          {" "}
          <label>Full Name</label>
          <br></br>
          <input
            style={{ width: "400px", height: "30px" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          {" "}
          <label>Mobile Number</label>
          <br></br>
          <input
            style={{ width: "400px", height: "30px" }}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          ></input>
        </div>
        <div>
          {" "}
          <label>Pin Code</label>
          <br></br>
          <input
            style={{ width: "400px", height: "30px" }}
            type="number"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
          ></input>
        </div>
        <div>
          {" "}
          <label>Street name,House No.,Company</label>
          <br></br>
          <input
            style={{ width: "400px", height: "30px" }}
            value={homeAdress}
            onChange={(e) => sethomeAdress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          {" "}
          <label>City/Town</label>
          <br></br>
          <select
            style={{ width: "400px", height: "30px" }}
            value={selectCity}
            onChange={(e) => setselectCity(e.target.value)}
            required
          >
            {city &&
              city.map((data) => {
                return <option value={data}>{data}</option>;
              })}
          </select>
        </div>
        <button onClick={(e) => submit(e)}>Proceed to place order</button>
      </form>
    </div>
  );
}

function mapstatetoprops(state) {
  return {
    basket: state.basket,
  };
}

export default connect(mapstatetoprops)(FillAdress);
