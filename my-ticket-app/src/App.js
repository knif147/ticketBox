import React from "react";

import { Provider } from "react-redux";
import store, { history } from "./store";

import "./App.css";
import "./style/default.less";
import "./style/index.less";

import Booking from "./component/Booking";

function App() {
  return (
    <Provider store={store}>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
      <Booking></Booking>
    </Provider>
  );
}

export default App;
