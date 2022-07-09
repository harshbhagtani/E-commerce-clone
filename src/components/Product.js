import {
  AddBox,
  AddBoxRounded,
  PlusOne,
  RemoveCircleOutlineRounded,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { addToBasket } from "../actions/action";
import "./product.css";

function Product({ data, basket, doc }) {
  const dispatch = useDispatch();
  const [isBasket, setIsBasket] = useState(false);

  useEffect(() => {
    let arr = basket.basketItems;
    //console.log(basket);
    setIsBasket(false);
    arr.forEach((d1) => {
      if (d1.id == data.id) {
        setIsBasket(true);

        return;
      }
    });
  }, [basket.basketItems]);

  const addTobasket = () => {
    doc.ref
      .collection("cart")
      .where("id", "==", data.id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
        });
        if (querySnapshot.empty) {
          doc.ref.collection("cart").add(data);
        }
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    // dispatch(addToBasket(data));
  };
  // console.log(basket);

  const removeBasket = () => {
    console.log(doc);
    doc.ref
      .collection("cart")
      .where("id", "==", data.id)
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
  };

  return (
    <div className="product">
      <div className="product-content">
        <p style={{ fontWeight: "bold" }}>{data.title}</p>
        <p>{data.description}</p>
      </div>
      <div className="product-price" style={{ fontWeight: "bold" }}>
        ${data.price}
      </div>
      <div className="product-rating">
        {Array(Math.round(data.rating))
          .fill()
          .map((_, i) => {
            return <span> ⭐</span>;
          })}
      </div>

      <div className="product-image">
        <img src={data.thumbnail} />
      </div>
      <div className="add-basket">
        {!isBasket ? (
          <button onClick={() => addTobasket()}>Add to basket</button>
        ) : (
          <button
            onClick={() => removeBasket()}
            style={{ background: "rgb(236,236,236)" }}
          >
            Remove from basket
          </button>
        )}
      </div>
    </div>
  );
}

function mapstatetoprops(state) {
  return {
    basket: state.basket,
  };
}

export default connect(mapstatetoprops)(Product);
