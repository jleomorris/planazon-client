import React from "react";
import "./MainHero.css";
import animals from "../../assets/images";
import { Container } from "reactstrap";
import { useQuery, gql } from "@apollo/client";

const FETCH_MAIN_CARDS = gql`
  {
    mainCards {
      image
      title
    }
  }
`;

function MainHero() {
  const { loading, error, data } = useQuery(FETCH_MAIN_CARDS);

  return (
    <div className="MainHero">
      <Container>
        <div className="header-container">
          <h2>
            Find a <br /> new plant baby <br /> for your home
          </h2>
          <img src={animals["plantHero"]} alt="main hero" />
        </div>
        {loading ? (
          <div className="loading-msg">Loading...</div>
        ) : error ? (
          <div>An error occured</div>
        ) : (
          <div className="cards-container">
            {data.mainCards.map((card) => {
              return (
                <div className="card" key={card.title}>
                  <h3>{card.title}</h3>
                  <img
                    src={animals[card.image]}
                    style={{ width: "100%" }}
                    alt="animal main card"
                  />
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
}

export default MainHero;
