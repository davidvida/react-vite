import React from "react";
import { staticData } from "../../data/items";
import { ItemProps } from "../../types/todo-item";
import Footer from "../footer/footer.component";
import Header from "../header/header.component";
import TodoList from "../todo-list/todo-list.component";

type StateProps = {
  data: Array<ItemProps>;
  activeItem: ItemProps | null;
  loading: boolean;
}

class TodoContainer extends React.Component<{}, StateProps> {

  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
      activeItem: null,
      loading: false,
    }
    this.handleSelectItem = this.handleSelectItem.bind(this);
    this.handleUpdateItem = this.handleUpdateItem.bind(this);
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

  componentDidMount() {
    this.setState({
      data: staticData
    });
  }

  /*
    actions
    - Load all the items
    - Add a new Item
    - Update an Item
  */

  render() {
    const { data, activeItem } = this.state;
    return (
      <>
        <Header />
        <TodoList
          onSelectItem={this.handleSelectItem}
          onUpdateItem={this.handleUpdateItem}
          activeItem={activeItem}
        />
        <Footer />
      </>
    );
  }
}

export default TodoContainer;
