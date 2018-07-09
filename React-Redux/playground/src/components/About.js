import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', props);
  }
  render() {
    return (<h1>About</h1>);
  }
}

export default About;