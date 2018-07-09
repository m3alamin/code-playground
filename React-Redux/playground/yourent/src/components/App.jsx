import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';


class App extends React.Component {
  render() {
    return(
      <div id="App">
        <Header/>
        <Switch>
        <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
