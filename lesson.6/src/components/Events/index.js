import React from "react";

class Button extends React.Component {
  handleClick() {
    alert("значение this: " + this);
  }

  render() {
    return <button onClick={this.handleClick}>missed this</button>;
  }
}

// class Button extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     alert("значение this: " + this);
//   }
//   render() {
//     return <button onClick={this.handleClick}>bound this</button>;
//   }
// }

// class Button extends React.Component {
//   // Предупреждение: это экспериментальный синтаксис
//   handleClick = () => {
//     alert("значение this: " + this);
//   };
//   render() {
//     return <button onClick={this.handleClick}>bound this</button>;
//   }
// }

// class Button extends React.Component {
//   //обычный метод класса
//   handleClick() {
//     alert("значение this: " + this);
//   }
//   render() {
//     return <button onClick={(e) => this.handleClick(e)}>bound this</button>;
//   }
// }

export default Button;
