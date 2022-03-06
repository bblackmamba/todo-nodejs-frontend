import React from "react";
import styled from "styled-components";
import Item from "./Item";


const StyledToDoList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  height: 400px;
  overflow-y: scroll;
`;

const ToDoList = ({list, complete}) => {

  return(
    <StyledToDoList>
      {list.map(({ id, ...props }) => <Item key={id + 'tdl'} id={id} complete={complete} {...props} />)}
    </StyledToDoList>
  );
}

export default ToDoList;
