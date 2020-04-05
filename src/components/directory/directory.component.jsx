import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getDirectorySections } from "../../redux/directory/directory.selector";
import "./directory.style.scss";
import MenuItem from "../menu-items/menu-items.component";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: getDirectorySections
});
export default connect(mapStateToProps, null)(Directory);
