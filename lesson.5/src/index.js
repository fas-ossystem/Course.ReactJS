import React from 'react';
import ReactDOM from 'react-dom';
import Examples from './examples'
import './index.css';

/** IF -> ELSE */
// const listItems = ["Orange", "Banana", "Apple", "Pineapple", "Lemon"];
// const listItems = [];

/** TERNARY operator */
// const listItems = [
//   {
//     mode: "VIEW",
//     text: "View-only item 1"
//   },
//   {
//     mode: "VIEW",
//     text: "View-only item 2"
//   },
//   {
//     mode: "EDIT",
//     text: "Editable item"
//   },
// ];

/** Logical && operator */


/** SWITCH CASE operator */
const message = {
    text: "Предупреждение",
    state: "warning"
};

ReactDOM.render(
  <React.StrictMode>
    {/** IF -> ELSE */}
    {/* <Examples listItems={listItems} /> */}

    {/** TERNARY operator */}
    {/* <Examples listItems={listItems} /> */}

    {/** Logical && operator */}
    {/*<Examples listItems={listItems} />*/}

    {/** SWITCH CASE operator */}
    <Examples text={message.text} state={message.state} />
  </React.StrictMode>,
  document.getElementById('root')
);
