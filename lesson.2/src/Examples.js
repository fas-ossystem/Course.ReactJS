import React from 'react';
import './Examples.css';

class Examples extends React.Component {
  constructor(props) {
    super(props)
  }

  /**
   * 
   */
  render() {
    const name = 'Иннокентий';

    return (
      <>
        <h1>Да прибудет с тобой сила, {name}</h1>
      </>
    );
  }
  /* =============================================================== */
}

export default Examples;
