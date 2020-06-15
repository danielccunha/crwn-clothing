import React from "react";

import "./styles.scss";

export default function CustomButton({ children, ...props }) {
  return (
    <button className="custom-button" {...props}>
      {children}
    </button>
  );
}
