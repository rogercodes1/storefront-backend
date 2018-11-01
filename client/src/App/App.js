import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
        </Switch>
      </div>
    );
  }
}

export default App;
