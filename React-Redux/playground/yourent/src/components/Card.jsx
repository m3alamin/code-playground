import React from 'react';

class Card extends React.Component {
  render() {
    return(
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Login for free</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Eassy to book</li>
              <li>Secure payment</li>
              <li>Email support</li>
              <li>Dashboard access</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
          </div>
        </div>
    );
  }
}

export default Card;
