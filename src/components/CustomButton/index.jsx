import React from "react";

import { Container } from "./styles";

export default function CustomButton({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
