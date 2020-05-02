import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ISSS Attendance</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link"> View Events</Link>
          </li>
          {/* <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
          </li> */}
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create Event</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}