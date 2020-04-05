import React from "react";
import CollectionOverview from "../../components/collections-overview/collections-overview.styles";
import CollectionPage from "../collection/collection.component";
import { Route, Switch } from "react-router-dom";
import "./shop.styles.scss";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Switch>
      <Route path={`${match.path}/:category`} component={CollectionPage} />
      <Route excat path={`${match.path}`} component={CollectionOverview} />
    </Switch>
  </div>
);

export default ShopPage;
