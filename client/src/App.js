import React from 'react'
import './App.css';
import Main from './views/Main'
import Detail from './views/Detail';
import Update from './views/Update'
import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/:id/edit">
          <Update />
        </Route>
        
        <Route path="/:id">
          <Detail />
        </Route>

        <Route path="/">
          <Main />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
