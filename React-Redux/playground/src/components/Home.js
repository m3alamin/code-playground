import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('props home', props);
  }
  render() {
    return (<h1>Home</h1>);
  }
}

export default Home;