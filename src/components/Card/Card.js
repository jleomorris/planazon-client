import React from "react";
import lion from "../../assets/image/lion2.jpg";
import "./Card.css";
import star from "../../assets/svg/star.svg";
import animal from "../../assets/images";
import { Link } from "react-router-dom";

function Card({ product }) {
  return (
    <Link to={`/product/${product.slug}`} className="Card">
      <img className="main-img" src={animal[product.image]} />
      <h4>{product.title}</h4>
      <div className="card-start">
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
      </div>
      <div className="card-price">
        <p>GBP £</p>
        <h4>{product.price}</h4>
      </div>
      <div className="card-prime">
        <span>prime</span> FREE delivery by{" "}
        <span className="bold">Tuesday, Feb 16</span>
      </div>
    </Link>
  );
}

export default Card;
