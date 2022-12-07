import React, { Component } from 'react';



class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://www.dappuniversity.com/bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Logic Design Project - blockchain-based peer-to-peer energy trading platform
        </a>
        
      </nav>
    );
  }
}

export default Navbar;
