import React from "react";
import CollectionOverview from "../../components/collections-overview/collections-overview.styles";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/spinner/with-spinner.component";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.action";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import "./shop.styles.scss";

const CollectionOverViewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    isLoading: true,
  };

  unsuscribeFromSnapshot = null;

  async componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.get().then((snapshot) => {
      const collectionMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionMap);
      this.setState({ isLoading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Switch>
          <Route
            path={`${match.path}/:category`}
            render={(props) => (
              <CollectionPageWithSpinner isLoading={isLoading} {...props} />
            )}
          />
          <Route
            excat
            path={`${match.path}`}
            render={(props) => (
              <CollectionOverViewWithSpinner isLoading={isLoading} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
