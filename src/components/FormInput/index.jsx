import React from "react";

import "./styles.scss";

export default function FormInput({ handleChange, label, value, ...props }) {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...props} />
      {label ? (
        <label className={`${value.length ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
}
