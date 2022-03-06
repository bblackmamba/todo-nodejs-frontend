import React from "react";
import styled from "styled-components";
import Button from "./Button";

const RadioForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 8;
  align-items: center;
`;

const RadioButtons = ({buttons, value, onClick}) => {
  return (
    <RadioForm>
      {buttons.map(({label, key}) => (
        <Button
          key={key}
          radio={true}
          checked={key === value}
          value={key}
          onClick={onClick}
          label={label}
        />))}
    </RadioForm>
  )
}

export default RadioButtons;
