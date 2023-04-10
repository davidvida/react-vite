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
          activeItem={activeItem}
        />
        <Footer />
      </>
    );
  }
}

export default TodoContainer;
