import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import ControlledList from "./controlledList";
import UncontrolledList from "./uncontrolledList";
import listData from "./fixtures.js";

import "./styles.css";

function Bubbling() {
  const controlledList = false;
  return (
    <div className="App">
      {!controlledList && <ControlledList listData={listData} />}
      {controlledList && <UncontrolledList listData={listData} />}
    </div>
  );
}

export default Bubbling;
