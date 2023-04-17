import { Container } from "@mui/material";
import React from "react";
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
  render() {
    return (
      <Container maxWidth="xs">
        <Header />
        <TodoList />
        <Footer />
      </Container>
    );
  }
}

export default TodoContainer;
