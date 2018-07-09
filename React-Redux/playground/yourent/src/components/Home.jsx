import React from 'react';

import Card from './Card';

class Home extends React.Component {
  render() {
    return(
      <div id="Home">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Find & Book Tee Times at 2000+ Golf Courses</h1>
          <p className="lead">The fastest & easiest way to book golf at the world's best golf courses</p>
        </div>

        <div className="container">
          <div className="card-deck mb-3 text-center">

            <Card />
            <Card/>
            <Card/>

          </div>
        </div>
      </div>
    );
  }
}

export default Home;
