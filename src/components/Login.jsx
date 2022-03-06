import React from "react";
import styled from "styled-components";
import { postLogin } from "../api/userApi";
import Link from "./Link";
import LoginForm from "./LoginForm";

const LoginDiv = styled.div`
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

const Login = ({history}) => {

  return (
    <LoginDiv>
      <LoginForm loginSend={postLogin} history={history} />
      <Link history={history} link="/signup" label="signup" />
    </LoginDiv>
  );
}

export default Login;
