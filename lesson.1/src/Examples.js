import React from 'react';
import './Examples.css';

class Examples extends React.Component {
  constructor(props) {
    super(props)
  }

  // /**
  //  * JSX. Встраивание выражений
  //  */
  // render() {
  //   const name = 'Иннокентий';

  //   return (
  //     <h1>Да прибудет с тобой сила, {name}</h1>
  //   );
  // }
  // /* =============================================================== */

  // /**
  //  * JSX. JSX это тоже выражение
  //  */
  // getFullName() {
  //   let firstName = 'Томас';
  //   let lastName = 'Йоханссон';

  //   return <u>{firstName} {lastName}</u>; 
  // }

  // render() {
  //   return <h1>Привет, { this.getFullName() }</h1>;
  // }
  // /* =============================================================== */

  /**
   * JSX. Дочерние элементы в JSX
   */
  render() {
    const el = (
      <div>
        <h1>Content header</h1>
        <p>Description...</p>
        <p>Text</p>
      </div>
    );

    // const el = (
    //     <h1>Content header</h1>
    //     <p>Description...</p>
    //     <p>Text</p>
    // );

    // const el = (
    //   <>
    //     <h1>Content header</h1>
    //     <p>Description...</p>
    //     <p>Text</p>
    //   </>
    // );

    return el;
  }
  /* =============================================================== */
}

export default Examples;
