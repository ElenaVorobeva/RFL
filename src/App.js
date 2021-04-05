import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/common/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Phonetics from "./components/phonetics";
import BasicsInReading from "./components/basicsInReading";
import BasicsInSpeaking from "./components/basicsInSpeaking";
import Courses from "./components/courses";
// import Beginner from "./components/beginner";
import About from "./components/about";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";

function App() {
  return (
    <React.Fragment>
      <NavBar />

      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/basics-in-reading" component={BasicsInReading}></Route>
        <Route path="/basics-in-speaking" component={BasicsInSpeaking}></Route>
        <Route path="/phonetics" component={Phonetics}></Route>
        <Route path="/courses" component={Courses}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from="/rfl" exact to="/home"></Redirect>
        <Redirect from="/" exact to="/home"></Redirect>
        <Redirect to="/not-found"></Redirect>
      </Switch>

      <Footer />
    </React.Fragment>
  );
}

export default App;
