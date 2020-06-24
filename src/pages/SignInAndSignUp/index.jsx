import React from "react";

import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import { Container } from "./styles";

export default function SignInAndSignUp() {
  return (
    <Container>
      <SignIn />
      <SignUp />
    </Container>
  );
}
