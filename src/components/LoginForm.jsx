
import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";

const LabelInput = styled.p`
  margin: 0px;
`;

const DivError = styled.div`
  height: 8px;
  margin: 1px;
`;

const LoginFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginForm = ({loginSend, history}) => {
  const [login, setLogin] = useState({data: "", error: false});
  const [password, setPassword] = useState({data: "", error: false});

  const submit = () => {
    let error = false;

    if ( login.data.length < 1 ) {
      error |= true;
      setLogin({data: login.data, error: "login must have at least 1 character"})
    }
    if ( login.data.length > 16 ) {
      error |= true;
      setLogin({data: login.data, error: "login must have a maximum of 16 characters"})
    }

    if ( password.data.length < 4 ) {
      error |= true;
      setPassword({data: password.data, error: "password must have at least 4 character"})
    }
    if ( password.data.length > 16 ) {
      error |= true;
      setPassword({data: password.data, error: "login must have a maximum of 16 characters"})
    }

    if ( error ) {
      return;
    }
    else {
      loginSend({login: login.data, password: password.data})
        .then(async (data) => {
          if(data.status !== 200){
            const errorRes = await data.json();
            if (errorRes.name.indexOf("password") !== -1) {
              setPassword({data: password.data, error: errorRes.name});
            }
            else {
              setLogin({data: login.data, error: errorRes.name});
            }
          }
          else {
            localStorage.setItem('jwt', await data.json())
            history.push('/home');
          }
        })
        .catch(e => alert(e.message));
    }
  }

  return (
    <LoginFormStyled>

      <LabelInput>login</LabelInput>
      <Input setInput={setLogin} isWrong={login.error} isSignupForm={true}/>
      <DivError>{login.error ? login.error : ' '}</DivError>

      <LabelInput>password</LabelInput>
      <Input type="password" setInput={setPassword} isWrong={password.error} isSignupForm={true}/>
      <DivError>{password.error ? password.error : ' '}</DivError>

      <Button submitSignup={true} label={'Login'} onClick={submit}/>
    </LoginFormStyled>
  );
}

export default LoginForm;
