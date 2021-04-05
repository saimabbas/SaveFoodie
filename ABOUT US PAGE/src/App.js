import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Websitetext from "./components/websitetext";
import Home from "./components/home";
import Donate from "./components/donate";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
// important libraries
// Auther: Naveed Nazamy
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* change routes based on URL */}
      <Router>
        <Header />

        {/* switch components based on routes */}
        <Switch>
          {/*individual path for specific route which is home  */}
          <Route path="/home.js" component={Home}></Route>
          <Route path="/donate" component={Donate} />
          <Route path="/about" component={About} />

          <Route path="/">
            <Donate />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
