import React from "react";
import styled from "styled-components";
import Link from "./Link";
import { postSignup } from "../api/userApi";
import SignupForm from "./SignupForm";

const SignupDiv = styled.div`
  margin: 0px 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7d7d7d;
  min-height: 470px;
  border: 1px solid #e6e1df;
  max-width: 500px;
  max-width: 400px;
  font-size: 10px;
  flex-direction: column;
`;

const Signup = ({history}) => {

  return (
    <SignupDiv>
      <SignupForm signup={postSignup} history={history}/>
      <Link history={history} link="/login" label="login" />
    </SignupDiv>
  );
}

export default Signup;
