import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProductDetail from "./ProductDetail";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://wp-reactandbeyond.localhost/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/products/:slug" component={ProductDetail} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
