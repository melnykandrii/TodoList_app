import "./App.css";
import TodoList from "./pages/TasksPage";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
