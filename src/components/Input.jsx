import React from "react";
import styled from "styled-components";

const InputStytled = styled.input`
  width: 150px;
  display: block;

  ${({isWrong}) => isWrong ? `border-color: red;`: ``}
`;

const Input = ({type = "text", setInput, isWrong, isSignupForm}) => {
  const handleChange = ({target: {value}}) => {
    if (isSignupForm) {
      type === "password" ? setInput({data: value, error: false}) : setInput({data: value.trim(), error: false});
    }
    else {
      setInput(value);
    }
  }


  
  return (
    <InputStytled type={type} onChange={handleChange} isWrong={isWrong}/>
  );
}

export default Input;