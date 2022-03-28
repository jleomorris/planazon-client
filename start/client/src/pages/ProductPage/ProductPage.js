import React from "react";
import { Container } from "react-bootstrap";
import animals from "../../assets/images";
import star from "../../assets/svg/star.svg";
import "./ProductPage.css";
import { Link, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const PRODUCT_QUERY = gql`
  query ($slug: String!) {
    product(slug: $slug) {
      title
      image
      description
      stock
      price
    }
  }
`;

function ProductPage() {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(PRODUCT_QUERY, {
    variables: {
      slug: slug,
    },
  });

  console.log("AnimalPage.useParams", useParams());
  console.log("AnimalPage.data", data);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>An error occured</div>;

  return (
    <div className="py-5">
      <Container>
        <div className="d-flex">
          <img
            src={animals[data.product.image]}
            className="product-img"
            style={{ marginRight: "1rem" }}
          />
          <div className="text-container">
            <h1>{data.product.title}</h1>
            <div className="star-container">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <div className="rating-stock-container">
                <p>1402 rating</p>
                <p>{data.product.stock} in stock</p>
              </div>
            </div>
            <div className="about-container">
              <h4>About this Product</h4>
              {/* <ul> */}
              {data.product.description.map((item) => (
                <li>{item}</li>
              ))}
              {/* </ul> */}
            </div>
          </div>
          <div className="cart-container border">
            <p className="price">
              <span>GBP £{data.product.price}</span>
            </p>
            <p className="delivery-time">
              FREE delivery: Thursday, Feb 25 Details
              <button className="buy-now-btn" style={{ marginTop: "2rem" }}>
                Add to Cart
              </button>
              <button>Buy Now</button>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductPage;
