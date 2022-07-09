import "./App.css";
import Headers from "./components/Headers";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { userLogin } from "./actions/auth";
import { connect, useDispatch } from "react-redux";
import { addIntialBasket, addToBasket } from "./actions/action";
import UserProfile from "./components/UserProfile";
import Orders from "./components/Orders";

function App(props) {
  const dispatch = useDispatch();
  const [doc, setDoc] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Login");
      return;
    }

    db.collection("users")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          // console.log(doc.id, doc.data());
          if (doc.data().uid == localStorage.getItem("token")) {
            //  console.log(doc);
            setDoc(doc);
            dispatch(userLogin(doc.data()));
          }
        });
      });
  }, [props.auth.isLoggedIn]);

  useEffect(() => {
    if (doc) {
      doc.ref.collection("cart").onSnapshot((snap) => {
        const data = [];
        snap.forEach((doc) => {
          // dispatch(addToBasket(doc.data()));
          console.log(doc.data());
          data.push(doc.data());
        });
        dispatch(addIntialBasket(data));
      });
    }
  }, [doc]);

  console.log(props);

  return (
    <div className="App">
      {/*Header */}

      {/*Home */}

      <Headers />
      <Routes>
        <Route path="/" element={<Home doc={doc} />}></Route>
        <Route path="/Checkout" element={<Checkout doc={doc} />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/orders" element={<Orders doc={doc} />} />
      </Routes>
    </div>
  );
}

function mapstatetoprops(state) {
  return {
    auth: state.user,
  };
}

export default connect(mapstatetoprops)(App);
