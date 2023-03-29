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
      data: staticData
    }
    this.handleAddNewItem = this.handleAddNewItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  handleAddNewItem() {
    //debugger;
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
      return {data: newData};
    });
  }

  handleRemoveItem(id: any) {
    //debugger;
    console.log(this.state)
    const deletedData = this.state.data.filter((item)=>item.id !== id);
    this.setState(() => {
      return {data: deletedData};
    });
  }

  render() {
    return (
      <>
        <Header dataLength={this.state.data.length} />
        <TodoList data={this.state.data} onDeleteItem={this.handleRemoveItem} />
        <Footer onAddNewItem={this.handleAddNewItem}/>
      </>
    );
  }
}

export default TodoContainer;
