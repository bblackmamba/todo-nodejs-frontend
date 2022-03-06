import React, { useState } from "react";
import styled from "styled-components";

const StyledAddItem = styled.div`
  margin: 0;
  width: 100%;
  background-color: #fefefe;
  min-height: 37px;
`;

const InputItem = styled.input`
  flex-grow: 4;
  height: 35px;
  margin: auto;
  outline: none;
  border: none;
  cursor: pointer;
  width: 98%;

  ::placeholder {
    color: "#979797";
  }
`;

const AddItem = ({add, placeholder}) => {
  const [text, setText] = useState('');

  const handleChange = ({ target: { value } }) => {setText(value)}
  const handleKeyDown = ({keyCode}) => {
    if (keyCode === 13) {
      add(text);
      setText('');
    }
  };

  return (
    <StyledAddItem>
      <InputItem value={text} onChange={handleChange} onKeyDown={handleKeyDown} placeholder={placeholder}/>
    </StyledAddItem>
  );
}

export default AddItem;
