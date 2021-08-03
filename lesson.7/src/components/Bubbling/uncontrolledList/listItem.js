import React, { PureComponent } from "react";
import Card from "../commonComponents/card";

class ListItem extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      count: 0,
    };
  }

  incrementCounter = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  onButtonClick = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  render() {
    const {
      data: { text: rawText, title },
    } = this.props;

    const text = rawText.slice(0, 100) + "...";

    const {
      onButtonClick,
      incrementCounter,
      state: { count, isOpen },
    } = this;

    return (
      <Card
        isOpen={isOpen}
        title={title}
        text={text}
        count={count}
        onTitleClick={incrementCounter}
        onButtonClick={onButtonClick}
      />
    );
  }
}

export default ListItem;
