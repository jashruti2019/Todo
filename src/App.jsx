import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";
import TodoItem1 from "./components/Todoitem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="todo-box">
        <AppName />
        <AppTodo />
        <div className="items-container">
          <TodoItem1 />
          <TodoItem2 />
        </div>
      </div>
    </div>
  );
}

export default App;
