import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import List from "./components/ListOfComponents/SimpleList";
const listData = [
  { id: "1", name: "Peter" },
  { id: "2", name: "Bob" },
  { id: "3", name: "Alex" },
];

import TableComponent from "./components/ListOfComponents/TableComponent";
import tableData from "./data/tableData.json";

import UncontrolledComponent from "./components/Forms/uncontrolledComponent.js";
import ControlledComponent from "./components/Forms/controlledComponent.js";

import Button from "./components/Events/index";

ReactDOM.render(
  // <TableComponent data={tableData} />,
  // <UncontrolledComponent />,
  // <ControlledComponent />,
  <Button />,
  document.getElementById("root")
);
