import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <p>Sample React Code</p>
          <Home></Home>
        </header>
      </div>
    </Provider>
  );
}
export default App;
