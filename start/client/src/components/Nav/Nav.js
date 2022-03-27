import React from "react";
import "./Nav.css";
import { Container } from "react-bootstrap";
import search from "../../assets/svg/loupe.svg";
import cart from "../../assets/svg/shopping-cart.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="Nav">
      <div className="nav-container">
        <Link to="/">
          <h4 className="header">
            Planazon<span>.com</span>
          </h4>
        </Link>
        <div className="nav-delivery-info-container">
          <p>Deliver to James</p>
          <h2>112 Skyline Plaza</h2>
        </div>
        <div className="nav-input-container">
          <select>
            <option>All</option>
          </select>
          <input />
          <button className="nav-btn">
            <img src={search} />
          </button>
        </div>
        <div className="accounts-returns-cart-container">
          <div className="nav-delivery-info-container">
            <p>Hello, James</p>
            <h2>Account & Lists</h2>
          </div>
          <div className="nav-delivery-info-container">
            <p>Returns</p>
            <h2>& Orders</h2>
          </div>
          <div className="nav-cart-container">
            <img src={cart} />
            <h2>cart</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
