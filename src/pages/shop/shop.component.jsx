import React, { useEffect } from "react";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./shop.styles.scss";
import CollectionOverviewContainer from "../../components/collections-overview/collection-overview.container";
import CollectionContainer from "../collection/collection.container";

import { fetchCollectionsStart } from "../../redux/shop/shop.action";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <div className="shop-page">
      <Switch>
        <Route
          path={`${match.path}/:category`}
          component={CollectionContainer}
        />
        <Route
          excat
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
