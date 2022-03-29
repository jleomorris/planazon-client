import React, { useEffect, useState } from "react";
import "./Nav.css";
import search from "../../assets/svg/loupe.svg";
import cart from "../../assets/svg/shopping-cart.svg";
import { Link, useHistory } from "react-router-dom";

export default function Nav() {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  const inputKeyHandler = (e) => {
    if (e.key === "Enter") {
      submitHandler();
    }
  };

  const submitHandler = () => {
    history.push(`/search?query=${searchTerm}`);
    setSearchTerm("");
  };

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
          <input
            onChange={(e) => onChangeHandler(e)}
            onKeyUp={(e) => inputKeyHandler(e)}
            placeholder="Enter search term"
            value={searchTerm}
          />
          <button className="nav-btn" onClick={submitHandler}>
            <img src={search} alt="search" />
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
            <img src={cart} alt="cart" />
            <h2>cart</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
