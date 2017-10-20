import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props =>
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">Mongo Scraper</a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><a href="/">Home</a></li>
        <li><a href="/saved">Saved Articles</a></li>
        <li><a className="btn btn-danger scrape-new">SCRAPE NEW ARTICLES!</a></li>
      </ul>
    </div>
  </nav>

export default Navbar;