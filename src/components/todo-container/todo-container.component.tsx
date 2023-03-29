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
    debugger;
    const id = this.getId(this.state.data);
    const newItem: ItemProps = {
      id: id,
      description: `New Item ${id}`,
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

  private getId(data: ItemProps[]): number {
    if (data && data.length > 0) {
      return this.state.data.slice(-1)[0].id + 1;
    }

    return 1;
  }

  handleRemoveItem(event: React.MouseEvent) {
    const button = event.target;

    if (button instanceof HTMLButtonElement) {
      const { action, index } = button.dataset;
      this.removeItem(action, index);
    }
  }

  private removeItem(action?: string, index?: string): void {
    if (action === 'delete' && index) {
      const newData = this.state.data.filter(item => item.id != parseInt(index));

      this.setState(() => {
        return {data: newData}
      });
    } 
  }

  render() {
    return (
      <>
        <Header dataLength={this.state.data.length} />
        <TodoList data={this.state.data} onRemoveItem={this.handleRemoveItem} />
        <Footer onAddNewItem={this.handleAddNewItem}/>
      </>
    );
  }
}

export default TodoContainer;
