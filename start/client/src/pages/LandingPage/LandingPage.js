import React from "react";
import MainHero from "../../components/MainHero/MainHero";
import CategoryDisplay from "../../components/CategoryDisplay/CategoryDisplay";
import CardDisplay from "../../components/CardDisplay/CardDisplay";
import { useQuery, useMutation, gql } from "@apollo/client";
import "./LandingPage.css";

const PRODUCTS_QUERY = gql`
  {
    products {
      image
      title
      id
      price
      slug
      image
    }
  }
`;

const ADD_ANIMAL_MUTATION = gql`
  mutation (
    $image: String!
    $category: String!
    $title: String!
    $stock: Int!
    $price: String!
    $description: [String!]!
    $rating: Float
    $slug: String!
  ) {
    addAnimal(
      image: $image
      category: $category
      title: $title
      stock: $stock
      price: $price
      description: $description
      rating: $rating
      slug: $slug
    ) {
      id
    }
  }
`;

function LandingPage() {
  const { loading, error, data } = useQuery(PRODUCTS_QUERY);
  const [addAnimal] = useMutation(ADD_ANIMAL_MUTATION);

  const addAnimalHandler = () => {
    addAnimal({
      variables: {
        image: "snakePlant",
        category: "1",
        title: 'Snake plant - 14"',
        stock: 13,
        price: "14.99",
        description: ["example description"],
        rating: 3.5,
        slug: "ostrich",
      },
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>An error occured</div>;

  return (
    <div>
      <MainHero />
      <CategoryDisplay />
      <CardDisplay animals={data.products} />
      <div className="add-container">
        <button className="add-plant-btn" onClick={addAnimalHandler}>
          Add plant
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
