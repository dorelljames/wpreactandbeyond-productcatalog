import React from "react";
import "./App.css";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Product from "./Product";

const GET_PRODUCTS = gql`
  query getProducts {
    products {
      edges {
        node {
          id
          name
          description
          slug
          price
          image {
            sourceUrl
          }
        }
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  console.log(data);

  return (
    <div className="productCatalog">
      <h2>WP React and Beyond Catalog</h2>
      <div className="productSearch">
        <input type="text" placeholder="Search for a product" />
      </div>
      <div className="productList">
        {(loading && <p className="loading">Fetching products...</p>) ||
          (error && <p>Error :(</p>) ||
          data.products.edges.map(product => (
            <Product
              key={product.node.id}
              imgSrc={product.node.image.sourceUrl}
              name={product.node.name}
              description={product.node.description}
              link={"products/" + product.node.slug}
              price={product.node.price}
              extraClass="blue"
            />
          ))}
      </div>
    </div>
  );
}

export default App;
