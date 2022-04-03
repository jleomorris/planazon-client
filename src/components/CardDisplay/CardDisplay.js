import React from "react";
import Card from "../Card/Card";
import { Container } from "react-bootstrap";

function CardDisplay({ products }) {
  return (
    <div className="card-display my-5">
      <Container className="card-display-container">
        {products.map((product) => {
          return <Card product={product} key={product.slug} />;
        })}
      </Container>
    </div>
  );
}

export default CardDisplay;
