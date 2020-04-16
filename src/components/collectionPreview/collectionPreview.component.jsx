import React from "react";
import CollectionItem from "../collection-item/collection-item.componenet";
import "./collectionPreview.style.scss";
import { Link, withRouter } from "react-router-dom";
const CollectionPreview = ({ title, items, history, match }) => {
  return (
    <div className="collection-preview">
      <Link className="title" to={`${match.path}/${title.toLowerCase()}`}>
        {title.toUpperCase()}
      </Link>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
