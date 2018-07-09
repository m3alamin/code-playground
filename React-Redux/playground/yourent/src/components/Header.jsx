import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return(
      <div id="Header">
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-black border-bottom box-shadow">
          <div className="my-0 mr-md-auto font-weight-normal">
            <Link className="logo" to="/">
              <img src="/images/teetimes-logo.png" alt="TeeTimes.Net" />
            </Link>
          </div>
          <div className="my-1 font-weight-normal">
            <input type="text" />
          </div>
          <nav className="my-2 my-md-0 mr-md-3">
            <Link className="p-2 text-dark" to="/about">Contact</Link>
            <Link className="p-2 text-dark" to="/about">About</Link>
          </nav>
          <Link className="btn btn-outline-primary" to="/about">Sign up</Link>
        </div>
      </div>
    );
  }
}

export default Header;
