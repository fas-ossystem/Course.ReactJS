import React, { PureComponent } from "react";
import Card from "../commonComponents/card";

class ListItem extends PureComponent {
  state = { count: 0 };

  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const { count } = this.state;
    const {
      data: { text: rawText, title },
      isOpen,
      onButtonClick,
    } = this.props;

    const text = rawText.slice(0, 100) + "...";

    return (
      <Card
        isOpen={isOpen}
        title={title}
        text={text}
        count={count}
        onTitleClick={this.incrementCounter}
        onButtonClick={onButtonClick}
      />
    );
  }
}

export default ListItem;
