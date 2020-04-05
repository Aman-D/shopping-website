import React from "react";
import CollectionPreview from "../../components/collectionPreview/collectionPreview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectonCollectionPreview } from "../../redux/shop/shop.selectors";
import "./collections-overview.styles.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectonCollectionPreview
});
export default connect(mapStateToProps)(CollectionOverview);
