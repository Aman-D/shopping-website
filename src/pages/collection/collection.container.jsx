import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import CollectionPage from "./collection.component";
import WithSpinner from "../../components/spinner/with-spinner.component";
import { selectIsCollectionLoading } from "../../redux/shop/shop.selectors";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionLoading,
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionContainer;
