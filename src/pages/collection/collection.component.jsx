import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.componenet";

import { connect } from "react-redux";
import { getCollection } from "../../redux/shop/shop.selectors";
import "./collection.styles.scss";

const CollectionPage = ({ collection, match }) => {
  console.log(match);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <div className="title">{title}</div>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: getCollection(ownProps.match.params.category)(state),
});
export default connect(mapStateToProps)(CollectionPage);
