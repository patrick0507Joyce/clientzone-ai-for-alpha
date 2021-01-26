import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
//import Home from './components/Home/Home';
import Allocation from './components/Allocation/Allocation';
import Performance from './components/Performance/Performance';
import Explain from './components/Explain/Explain';


const App = () => {

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Performance} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/performance" exact component={Performance} />
        <Route path="/allocation" exact component={Allocation} />
        <Route path="/explain" exact component={Explain} />
      </Switch>
    </Container>
    </BrowserRouter>
  );
};

export default App;
