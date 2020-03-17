import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./store";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Viewuser from "./components/Viewuser";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <p>User Data</p>
          </header>
        </div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/users" component={Home}></Route>
          <Route exact path="/user/:id" component={Viewuser}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
