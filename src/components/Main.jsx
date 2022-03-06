import React, { useState, useEffect } from 'react';

import Button from "./Button";
import RadioButtons from "./RadioButtons";
import AddItem from "./AddItem";
import styled from "styled-components";
import ToDoList from './ToDoList';
import {getItems, createItem, checkedItem, deleteChecked} from '../api/todoAPI';

const MainDiv = styled.div`
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  margin: 0px 10%;  
`;

const Bottom = styled.div`
  background-color: #ffffff;
  color: #7a7e83;
  display: flex;
  border: 1px solid #efefef;
  font-size: 10px;
  border-top-width: 0px;
  height: auto;
  flex-wrap: wrap;
  min-height: 32px;
`;

const CountUncompleted = styled.p`
  flex-grow: 1;
  margin-left: 10px;
`;

const FILTER_ALL = 'all';
const FILTER_COMPLETED = 'completed';
const FILTER_UNCOMPLETED = 'uncompleted';

const FILTER_BUTTONS = [
  {label: 'All', key: FILTER_ALL},
  {label: 'Completed', key: FILTER_COMPLETED},
  {label: 'Active', key: FILTER_UNCOMPLETED},
]

function Main({history}) {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState(FILTER_ALL);

  useEffect(() => getItems()
    .then((data) => {
      if (data === null) {
        history.push('/signup');
      }
      else setList(data);
    })
    .catch(e => console.log(e)),
    [history]);

  const add = async (text) => {
    if (text.trim().length > 1) {
      setList([ ...list, {
        id: await createItem(text),
        text: text,
        isCompleted: false,
      }]);
    }
  }

  const complete = async (id) => {
    setList(await checkedItem(id))
  }

  const deleteAllItems = async () => {
    setList(await deleteChecked());
  }

  const applyFilter = (filt = filter) => {
    switch(filt) {
      case FILTER_COMPLETED:
        return list.filter((el) => el.isCompleted);
      case FILTER_UNCOMPLETED:
        return list.filter((el) => !el.isCompleted);
      default: 
        return list;
      }
  }

  const handleFilter = (f) => setFilter(f);

  return (
    <MainDiv>
      <AddItem add={add} placeholder={"What needs to be done?"}/>
      <ToDoList list={applyFilter()} add={add} complete={complete} filter={filter}/>
      <Bottom>
        <CountUncompleted>{`${applyFilter(FILTER_UNCOMPLETED).length} items left`}</CountUncompleted>
        <RadioButtons buttons={FILTER_BUTTONS} value={filter} onClick={handleFilter} />
        <Button className="delete completed" label="Clear completed" onClick={deleteAllItems} />
      </Bottom>
    </MainDiv>
  );
}

export default Main;
