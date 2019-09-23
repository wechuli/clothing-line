import React from "react";
import "./CustomButton.scss";

const CustomButton = props => {
  const { children, inverted, isGoogleSignIn, ...otherProps } = props;
  return (
    <button
      className={`${inverted ? "inverted" : ""}${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
