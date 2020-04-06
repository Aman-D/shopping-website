import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, inverted, google, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      google ? "google" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
