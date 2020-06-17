import React from "react";

import "./styles.scss";

export default function CustomButton({
  children,
  isGoogleSignIn,
  inverted,
  ...props
}) {
  let className = "custom-button";
  className += inverted ? " inverted" : "";
  className += isGoogleSignIn ? " google-sign-in" : "";

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
