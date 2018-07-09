import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <Home/>} />
        <Route path='/contact' render={() => <Contact/>} />
      </Switch>
    );
  }
}

export default App;