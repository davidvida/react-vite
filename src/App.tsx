import { ThemeProvider } from "@mui/material";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import TodoContainer from "./components/todo-container/todo-container.component";
import TodoList from "./components/todo-list/todo-list.component";
import theme from "./theme";
import AppContextProvider from "./context/app-context";


const App = () => (
  <AppContextProvider>
    <TodoContainer />
  </AppContextProvider>
);

export default App;
