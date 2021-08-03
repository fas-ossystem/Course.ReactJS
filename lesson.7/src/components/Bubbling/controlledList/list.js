import React, { PureComponent } from "react";
import Item from "./listItem";

export default class ControlledList extends PureComponent {
  state = { openItemId: null };

  handleClick = (openItemId) => {
    this.setState({
      openItemId: this.state.openItemId === openItemId ? null : openItemId,
    });
  };

  render() {
    const { listData } = this.props;
    const listItems = listData.map((item, index) => (
      <Item
        key={item.id}
        data={item}
        isOpen={this.state.openItemId === item.id}
        onButtonClick={this.handleClick.bind(this, item.id)}
      />
    ));
    return <ul className="list-conteiner">{listItems}</ul>;
  }
}
