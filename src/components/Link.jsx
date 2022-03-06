import React from "react";
import styled from "styled-components";


const LinkDiv= styled.div`
  color: #7a7a7a;
  margin-bottom: 5px;
  cursor: pointer;
  user-select: none;

  ${(({ history, link }) => history.location.pathname===link ? `
    border: 1px solid #e6e1df;
    border-radius: 2px;
    `:``
  )}
`;

const Link = ({history, link, label}) => {

  const clickLink = () => {
    history.push(link);
  }

  return(
    <LinkDiv history={history} link={link} onClick={clickLink}>{label}</LinkDiv>
  );
}

export default Link;
