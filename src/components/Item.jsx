import styled from "styled-components";

const CheckMark = styled.div``;

const StyledItem = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  border: 1px solid #efefef;
  height: 40px;
  padding-left: 15px;
  font-size: 11px;
  justify-content: flex-start;
  overflow: hidden;

  ${(({isCompleted}) => isCompleted ? `
    text-decoration: line-through;
    color: #d9d9d9;

    ${CheckMark}{
      opacity: 1;
      height: 4px;
      width: 10px;
      border-right: 1px solid #5cb85c;
      border-top: 1px solid #5cb85c;
      transform: rotate(135deg);
      margin: 2px auto auto 3px;
    }`
    :
    'color: #515161;'
  )}
`;

const Circle = styled.div`
  border: 1px solid #efefef;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Item = ({id, text, isCompleted, complete}) => {

  return(
    <StyledItem 
      isCompleted={isCompleted}
      key={id + 'li'}
      value={id}
      onClick={({target: {value}}) => complete(value)}
    >
      <Circle>
      <CheckMark></CheckMark>
      </Circle>
      {text}
    </StyledItem>
  );
}

export default Item;
