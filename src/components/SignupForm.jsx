import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";

const LabelInput = styled.p`
  margin: 0px;
`;

const LabelError = styled.p`
  height: 10px;
  margin: 1px;
`;

const SingupFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignupForm = ({signup, history}) => {
  const [login, setLogin] = useState({data: "", error: false});
  const [name, setName] = useState({data: "", error: false});
  const [password, setPassword] = useState({data: "", error: false});
  const [passwordConfirm, setPasswordConfirm] = useState({data: "", error: false});

  const submit = async () => {
    let error = false;

    if (login.data.length < 1 ) {
      error |= true;
      setLogin({data: login.data, error: "login must have at least 1 character"})
    }
    if (login.data.length > 16 ) {
      error |= true;
      setLogin({data: login.data, error: "login must have a maximum of 16 characters"})
    }

    if (name.data.length < 1) {
      error |= true;
      setName({data: name.data, error: "name must have at least 1 character"})
    }
    if (name.data.length > 16 ) {
      error |= true;
      setName({data: name.data, error: "name must have a maximum of 16 characters"})
    }

    if (password.data.length < 4 ) {
      error |= true;
      setPassword({data: password.data, error: "password must have at least 4 character"})
    }
    if (password.data.length > 16 ) {
      error |= true;
      setPassword({data: password.data, error: "login must have a maximum of 16 characters"})
    }
    if (password.data !== passwordConfirm.data) {
      error |= true;
      setPasswordConfirm({data: passwordConfirm.data, error: "password confirmation doesn't match"}) 
    }
    
    if (error) {
      return;
    }
    else {
      await signup({login: login.data, name: name.data, password: password.data})
        .then(async (data) => {
          if (data.status === 422) {
            const errorRes = await data.json();
            setLogin({data: login.data, error: errorRes.description});

          }
          else {
            localStorage.setItem('jwt', data);
            history.push('/home');
          }
        })
        .catch(e => alert(e.message));
    }
  }

  return (
    <SingupFormStyled>

      <LabelInput>login</LabelInput>
      <Input setInput={setLogin} isWrong={login.error} isSignupForm={true}/>
      <LabelError>{login.error ? login.error : ' '}</LabelError>

      <LabelInput>name</LabelInput>
      <Input setInput={setName} isWrong={name.error} isSignupForm={true}/>
      <LabelError>{name.error ? name.error : ' '}</LabelError>

      <LabelInput>password</LabelInput>
      <Input type="password" setInput={setPassword} isWrong={password.error} isSignupForm={true}/>
      <LabelError>{password.error ? password.error : ' '}</LabelError>

      <LabelInput>confirm password</LabelInput>
      <Input type="password" setInput={setPasswordConfirm} isWrong={passwordConfirm.error} isSignupForm={true}/>
      <LabelError>{passwordConfirm.error ? passwordConfirm.error : ' '}</LabelError>

      <Button submitSignup={true} label={'Signup'} onClick={submit}/>
    </SingupFormStyled>
  );
}

export default SignupForm;
