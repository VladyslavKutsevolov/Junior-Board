import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Collections from './components/collections/Collections';
import NavBar from './components/nav/NavBar';
import Collection from './components/collections/Collection';
import Signup from './components/auth/Signup';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto">
        <Switch>
          <Route exact path="/collections" component={Collections} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/collection/:id" component={Collection} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
