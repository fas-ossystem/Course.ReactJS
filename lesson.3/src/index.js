import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import PropsComponent from './components/propsComponent/index';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <App>
      <PropsComponent />
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);
