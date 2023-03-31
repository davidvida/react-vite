import React from "react";
import { staticData } from "../../data/items";
import { ItemProps } from "../../types/todo-item";
import Footer from "../footer/footer.component";
import Header from "../header/header.component";
import TodoList from "../todo-list/todo-list.component";

type StateProps = {
  data: Array<ItemProps>;
  activeItem: ItemProps | null;
}

class TodoContainer extends React.Component<{}, StateProps> {

  constructor(props: {}) {
    super(props);
    this.state = {
      data: staticData,
      activeItem: null,
    }
    this.handleAddNewItem = this.handleAddNewItem.bind(this);
    this.handleSelectItem = this.handleSelectItem.bind(this);
    this.handleUpdateItem = this.handleUpdateItem.bind(this);
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
      return {data: newData};
    });
  }

  handleSelectItem (item: ItemProps) {
    this.setState(() => ({ activeItem: item }));
  }

  handleUpdateItem (id: number, itemData: Partial<ItemProps>) {
    const currentItemIndex = this.state.data.findIndex(item => item.id === id);
    this.setState({
      data: [
        ...this.state.data.slice(0, currentItemIndex),
        { ...this.state.data[currentItemIndex], ...itemData },
        ...this.state.data.slice(currentItemIndex + 1),
      ],
      activeItem: null,
    });
  }

  render() {
    const { data, activeItem } = this.state;
    return (
      <>
        <Header dataLength={data.length} />
        <TodoList
          data={data}
          onSelectItem={this.handleSelectItem}
          onUpdateItem={this.handleUpdateItem}
          activeItem={activeItem}
        />
        <Footer onAddNewItem={this.handleAddNewItem}/>
      </>
    );
  }
}

export default TodoContainer;
