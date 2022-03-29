import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import CardDisplay from "../../components/CardDisplay/CardDisplay";

const PRODUCT_SEARCH_QUERY = gql`
  query ($searchTerm: String!) {
    productSearch(searchTerm: $searchTerm) {
      id
      title
      price
      image
      slug
      rating
    }
  }
`;

function SearchPage() {
  const { search } = useLocation();
  const searchQuery = search.split("=")[1];

  console.log("searchPage.searchQuery", searchQuery);

  const { data, loading, error } = useQuery(PRODUCT_SEARCH_QUERY, {
    variables: {
      searchTerm: searchQuery,
    },
  });

  if (loading) return <div className="loading-msg">Loading...</div>;

  if (error) return <div>An error occured</div>;

  return (
    <div className="py-5">
      <Container>
        <h1>
          {`${
            data.productSearch.length !== 0 ? data.productSearch.length : "No"
          }
          search ${
            data.productSearch.length > 1 ? "results" : "result"
          } for "${searchQuery}"`}
        </h1>
        <CardDisplay products={data.productSearch} />
        {data.productSearch.length === 0 && <h2>Try search again.</h2>}
      </Container>
    </div>
  );
}

export default SearchPage;
