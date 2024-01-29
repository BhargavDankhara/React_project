import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark header d-flex justify-content-between align-items-center">
        <div className='container'>
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div>

          <div className=''>
            <ul className="navbar-nav">
              <li class="nav-item"><a className="nav-link fs-5 px-3 active" href="/">Home</a></li>
              <li class="nav-item"><a className="nav-link fs-5 px-3" href="/about">About Us</a></li>
              <li class="nav-item"><a className="nav-link fs-5 px-3" href="/overview">Overview</a></li>
              <li class="nav-item"><a className="nav-link fs-5 px-3" href="/rendering">Rendering</a></li>
              <li class="nav-item"><a className="nav-link fs-5 px-3" href="/routing">Routing</a></li>
              <li class="nav-item"><a className="nav-link fs-5 px-3" href="/handeling">Handeling</a></li>
              <li class="nav-item"><a className="nav-link fs-5 px-3" href="/faq">FAQ's</a></li>
              <li class="nav-item"><a className="nav-link fs-5 px-3" href="/contact_us">Contact Us</a></li>
            </ul>
          </div>

        </div>
      </nav>
    );
  }
}

export default Header;
