import React from "react";
import { staticData } from "../../data/items";
import { ItemProps } from "../../types/todo-item";
import Footer from "../footer/footer.component";
import Header from "../header/header.component";
import TodoList from "../todo-list/todo-list.component";

type StateProps = {
  data: Array<ItemProps>
}

class TodoContainer extends React.Component<{}, StateProps> {

  constructor(props: {}) {
    super(props);
    this.state = {
      data: []
    }
    this.handleAddNewItem = this.handleAddNewItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);

  }

  handleAddNewItem() {
    const newItem: ItemProps = {
      id: this.state.data.length + 1,
      description: 'New Item',
      status: 'inProgress'
    };

    const newData = [
      ...this.state.data,
      newItem
    ];
    this.setState(() => {
      return { data: newData };
    });
  }

  handleDeleteItem(id: number) {
    this.setState(() => { return { data: this.state.data.filter(item => item.id != id) } });
  }



  render() {
    return (
      <>
        <Header dataLength={this.state.data.length} />
        <TodoList data={this.state.data} handleDeleteItem={this.handleDeleteItem} />
        <Footer onAddNewItem={this.handleAddNewItem} />
      </>
    );
  }
}

export default TodoContainer;
