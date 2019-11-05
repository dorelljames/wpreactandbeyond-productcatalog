import React from "react";
import "./App.css";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Link, useParams } from "react-router-dom";

const GET_PRODUCT_DETAILS = gql`
  query getProductBySlug($slug: String) {
    product: productBy(slug: $slug) {
      name
      description
      price
      image {
        sourceUrl
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;

function ProductDetail() {
  console.log(useParams());
  const { slug } = useParams();
  const { error, loading, data } = useQuery(GET_PRODUCT_DETAILS, {
    variables: { slug }
  });

  if (loading) return <p className="text-white">Fetching...</p>;
  if (error) return <p className="text-white">ERROR: {error.message}</p>;

  const {
    image: { sourceUrl: imgSrc },
    price,
    name,
    description,
    categories: { edges: categories }
  } = data.product;

  return (
    <div className="productList">
      <figure className="black product">
        <img src={imgSrc} alt={name} />
        <div className="price">{price}</div>
        <figcaption>
          <h3>{name}</h3>
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <br />
          <p>
            Category: {categories.map(category => category.node.name).join(",")}
          </p>
          <Link to="/">Go Back</Link>
        </figcaption>
      </figure>
    </div>
  );
}

export default ProductDetail;
