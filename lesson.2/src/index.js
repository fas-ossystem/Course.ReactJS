import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import SimpleComponent from './simpleComponent';
import FunctionalComponent from './functionComponent';
import ClassComponent from './classComponent';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <SimpleComponent /> */}
    {/* <FunctionalComponent /> */}
    <ClassComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
