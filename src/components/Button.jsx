import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #ffffff;
  border: none;
  color: #7a7e83;
  font-size: 10px;
  cursor: pointer;

  ${(({radio}) => radio ? `
    background-color: #ffffff;
    color: #7a7e83;
    border: none;
    font-size: 10px;` 
    : ''
  )}

  ${(({radio, checked}) => radio && checked ? `
    border: 1px solid #e6e1df;
    border-radius: 2px;`
    : ''
  )}

  ${(({removeAll}) => removeAll ? `
    flex-grow: 1;`
    : ''
  )}

  ${({submitSignup}) => submitSignup ?`
    min-height: 20px;
    min-width: 100px;
    margin: 5px 25px;` 
    : ``
  }

`;

const Button = ({ radio, checked, removeAll, label, value, onClick, submitSignup}) => {
  return(
  <StyledButton
      radio={radio}
      checked={checked}
      removeAll={removeAll}
      value={value} 
      onClick={({target: {value}}) => onClick(value)}
      submitSignup={submitSignup}
  >
     {label}
  </StyledButton>
  );
}

export default Button;
