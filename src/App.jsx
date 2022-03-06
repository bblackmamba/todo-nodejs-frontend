import React, {useEffect} from 'react';
import styled from "styled-components";
import { Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Link from './components/Link';
import About from './components/About';
import Signup from './components/Signup';
import Main from './components/Main';
import Login from './components/Login';
const pjson = require('../package.json');

const Application = styled.div`
  margin: 40px 25px;
  min-height: 450px;
  width: 500px;
  min-width: auto;
`;

const Top = styled.div`
  color: #ecd8d9;
  text-align: center;
  font-size: 35px;
  height: 70px;
`;

const Title = styled.h2`
  margin: 0;
  font-family: sans-serif;
  font-weight: 500;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
`;

function App({history}) {
  useEffect(() => console.log(pjson.version),
    [],
  );

  return (
    <Application>
      <Top>
        <Title>todos</Title>
      </Top>
      <Links>
        <Link history={history} link='/about' label='about' />
        <Link history={history} link='/home' label='todos list' />
      </Links>
      <Switch> 
        <Redirect exact path to="/home" />
        <Route exact path="/home" component={Main} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Application>
  );
}

export default withRouter(App);
