import React, { useState, useEffect } from "react";
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
  const [products, setProducts] = useState([]);
  const { error, loading, data } = useQuery(GET_PRODUCTS);

  useEffect(() => {
    if (error) {
      setProducts([]);
    }

    if (!loading && data && data.products) {
      setProducts(data.products.edges.map(p => p.node));
    }
  }, [error, loading, data]);

  const searchProducts = e => {
    const currentSearch = e.target;

    setProducts(
      currentSearch.value === ""
        ? data.products.edges.map(p => p.node)
        : prevProducts =>
            prevProducts.filter(product => {
              return product.name
                .toLowerCase()
                .includes(currentSearch.value.toLowerCase());
            })
    );
  };

  return (
    <div className="productCatalog">
      <h2>WP React and Beyond Catalog</h2>
      <div className="productSearch">
        <input
          type="text"
          placeholder="Search for a product"
          onChange={e => searchProducts(e)}
        />
      </div>
      <div className="productList">
        {(loading && <p className="text-white">Fetching products...</p>) ||
          (error && <p>Error :(</p>) ||
          (products.length >= 1 ? (
            products.map(product => (
              <Product
                key={product.id}
                imgSrc={product.image.sourceUrl}
                name={product.name}
                description={product.description}
                link={"products/" + product.slug}
                price={product.price}
                extraClass="blue"
              />
            ))
          ) : (
            <p className="text-white">No products...</p>
          ))}
      </div>
    </div>
  );
}

export default App;
