import TodoContainer from "./components/todo-container/todo-container.component";
import { Provider } from 'react-redux';
import store from './state/state';

const App = () => (
  <Provider store={store}>
    <TodoContainer />
  </Provider>
);

export default App;
