import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="productSearch">
        <input type="text" placeholder="Search for a product" />
      </div>
      <div className="productList">
        <figure className="product">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg"
            alt="sample71"
          />
          <div className="price">$19.00</div>
          <figcaption>
            <h3>Wool Hat</h3>
            <p>
              Sometimes I think the surest sign that intelligent life exists
              elsewhere in the universe is that none of it has tried to contact
              us.
            </p>
            <a href="/product/wool-hat">View Product</a>
          </figcaption>
        </figure>
        <figure className="product blue">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample47.jpg"
            alt="sample47"
          />
          <div className="price">$19.00</div>
          <figcaption>
            <h3>Denim Shirt </h3>
            <p>
              I don't need to compromise on my principles, because they don't
              have the slightest bearing on what happens to me anyway.
            </p>
            <a href="/product/denim-shirt">View Product</a>
          </figcaption>
        </figure>
        <figure className="product orange">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample52.jpg"
            alt="sample52"
          />
          <div className="price">$19.00</div>
          <figcaption>
            <h3>Wax Jacket</h3>
            <p>
              You know that is the real problem with nature, something's always
              stinging you or oozing mucous all over you. Let's go and watch TV.
            </p>
            <a href="/product/wax-jacket">View Product</a>
          </figcaption>
        </figure>
      </div>
    </React.Fragment>
  );
}

export default App;
