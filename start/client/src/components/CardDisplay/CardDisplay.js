import React from "react";
import Card from "../Card/Card";
import { Container } from "react-bootstrap";

function CardDisplay({ products }) {
  return (
    <div className="card-display">
      <Container className="card-display-container">
        {products.map((product) => {
          return <Card product={product} />;
        })}
      </Container>
    </div>
  );
}

export default CardDisplay;
