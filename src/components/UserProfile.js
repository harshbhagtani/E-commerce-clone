import { Avatar } from "@mui/material";
import React from "react";
import { connect } from "react-redux";

function UserProfile(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        padding: "20px",
      }}
    >
      <div style={{ width: "400px", height: "400px" }}>
        {" "}
        <Avatar
          style={{ width: "100px", height: "100px", margin: "0 auto" }}
        ></Avatar>
        <br></br>
        <div>
          <h3>Name</h3>
          <p>{props.auth.user.name}</p>
        </div>
        <br></br>
        <div>
          <h3>Email</h3>
          <p>{props.auth.user.email}</p>
        </div>
        <br></br>
        <div>
          <h3>Mobile Number</h3>
          <p>{props.auth.user.mobileNumber}</p>
        </div>
      </div>
    </div>
  );
}

function mapstatetoprops(state) {
  return {
    auth: state.user,
  };
}

export default connect(mapstatetoprops)(UserProfile);
