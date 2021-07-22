import react from "react";

class App extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
    };

    console.log("Constructor: props", props);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("static getDerivedStateFromProps(): ");
    console.log("props: ", props);
    console.log("state: ", state);

    return null;
  }

  changeName = () => {
    const name = window.prompt("Введите имя: ");

    this.setState({ name: name });
  };

  componentDidMount() {
    console.log("componentDidMount(): ");
    console.log("this.props: ", this.props);
    console.log("this.state: ", this.state);

    this.setState({ name: "Andrey" });

    console.log("this.props: ", this.props);
    console.log("this.state: ", this.state);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate(nextProps, nextState): ");
    console.log("nextProps: ", nextProps);
    console.log("nextState: ", nextState);
    console.log("this.props: ", this.props);
    console.log("this.state: ", this.state);

    return true;
  }

  render() {
    console.log("render(): this.props", this.props);
    console.log("render(): this.state", this.state);

    return (
      <>
        <h1>{this.state.name}</h1>
        <button onClick={this.changeName}>Имзенить имя</button>
      </>
    );
  }
}

export default App;
