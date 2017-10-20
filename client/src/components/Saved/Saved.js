import React from "react";
import { Link } from "react-router-dom";
import "./Saved.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Saved = props =>
  <div>
    <div class="jumbotron text-center">
      <div class="overlay">
      </div>
      <div class="background-image">
      </div>
      <div class="caption">
        <h1>Saved Articles</h1>
        <p>Your Saved Articles</p>
      </div>
    </div>

    <div class="container-fluid article-container">
    </div>
  </div>

export default Saved;