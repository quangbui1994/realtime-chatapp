import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Switch>
  );
};

export default App ;