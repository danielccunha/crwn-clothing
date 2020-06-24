import React from "react";

import { Container, Input, InputLabel } from "./styles";

export default function FormInput({ handleChange, label, value, ...props }) {
  return (
    <Container>
      <Input onChange={handleChange} {...props} />
      {label ? (
        <InputLabel className={`${value.length ? "shrink" : ""}`}>
          {label}
        </InputLabel>
      ) : null}
    </Container>
  );
}
