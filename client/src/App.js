import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Main from "./pages/Main";
import Articles from "./components/Articles";
import Saved from "./components/Saved";
import Footer from "./components/Footer";


const App = () =>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
          <Route exact path="/" component={Main} />
          <Route exact path="/" component={Articles} />
          <Route exact path="/saved" component={Saved} />
      </Wrapper>
      <Footer />
    </div>
  </Router>;

export default App;
