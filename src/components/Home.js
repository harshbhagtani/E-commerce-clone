import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Product from "./Product";

function Home(props) {
  const [products, setProducts] = useState([]);
  const [row1, setRow1] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const val = Math.round(Math.random() * 21);
        console.log(val);
        setRow1(data.products.slice(val, val + 8));
      });
  }, []);

  return (
    <div className="home">
      <div className="home-container">
        <img src="https://m.media-amazon.com/images/S/sonata-images-prod/UK_Superhero_Acquisition_FT_April_2021_V2/ec12117a-ee48-453c-9a64-4453031d477a._UR3000,600_.jpeg" />
        <div className="home-row"></div>
        <div className="home-row">
          {row1.map((data) => {
            return <Product data={data} doc={props.doc} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
