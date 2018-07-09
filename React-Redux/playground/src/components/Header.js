import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
  render() {
    return (<header>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li>
          <select>
            <option value="USD">USD</option>
            <option value="BDT">BDT</option>
          </select>
        </li>
      </ul>
    </header>);
  }
}

export default Header;