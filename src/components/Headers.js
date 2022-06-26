import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { userLogout } from "../actions/auth";
import { addIntialBasket } from "../actions/action";
function Headers(props) {
  const navigate = useNavigate();

  return (
    <div className="header">
      <Link to="/" className="header-logo-link">
        <img src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?fit=2560%2C1578&ssl=1" />
      </Link>

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="search-icon" />
      </div>
      <div className="header-nav">
        {props.auth.isLoggedIn ? (
          <Link to="/user" className="option1">
            <span style={{ fontSize: 10 }}>Hello</span>
            <br />
            <span>{props.auth.user.name}</span>
          </Link>
        ) : (
          <Link to="/login" className="option1">
            <span style={{ fontSize: 10 }}>Hello</span>
            <br />
            <span>Sign in</span>
          </Link>
        )}

        <div className="option2">
          <span style={{ fontSize: 10 }}>Returns </span>
          <br />
          <span>& Orders </span>
        </div>
        <div className="option3">
          <span style={{ fontSize: 10 }}>Your </span>
          <br />
          <span>Prime </span>
        </div>

        <Link to="Checkout" className="option-basket">
          <ShoppingBasketIcon style={{ marginRight: 10 }} />
          <span>{props.basket.basketItems.length}</span>
        </Link>
      </div>
      {props.auth.isLoggedIn && (
        <div
          className="option1"
          onClick={() => {
            localStorage.clear();

            props.dispatch(userLogout());
            props.dispatch(addIntialBasket([]));
          }}
          style={{ cursor: "pointer" }}
        >
          <span style={{ fontSize: 16 }}>Log-out</span>
        </div>
      )}
    </div>
  );
}

function mapstatetoprops(state) {
  return {
    basket: state.basket,
    auth: state.user,
  };
}

export default connect(mapstatetoprops)(Headers);
