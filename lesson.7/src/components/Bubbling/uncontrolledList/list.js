import React, { PureComponent } from "react";
import Item from "./listItem";

export default class UncontrolledList extends PureComponent {
  render() {
    const { listData } = this.props;
    const listItems = listData.map((item, index) => (
      <Item key={item.id} data={item} />
    ));
    return <ul className="list-conteiner">{listItems}</ul>;
  }
}
