import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Footer from './Footer';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'about': {name: "AL", age: 50}};
  }
  render() {
    return (
      <div id="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:name' component={Home} />
          <Route path='/about' render={()=><About test-prop={this.state.about}/>} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;