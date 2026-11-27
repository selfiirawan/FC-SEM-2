import "./Todo.css";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true);

  const toggleIsCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // step 7
  const addNewTodo = (newTodo) => {
    let newId = todos.length == 0 ? 101 : todos[todos.length - 1].id + 1;
    const newTodoWithId = { id: newId, ...newTodo };

    setTodos([...todos, newTodoWithId]);
  };

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    const todosArray = JSON.parse(savedTodos);
    setTodos(todosArray);
  }, []);

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
      return;
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div
      className="card rounded shadow-sm"
      style={{ maxWidth: "500px", margin: "60px auto" }}
    >
      <div className="card-body">
        <h3 className="card-title mb-3">My Todo List</h3>

        <TodoList
          todoItems={todos}
          toggleIsCompleted={toggleIsCompleted}
          deleteTodo={deleteTodo}
        />
        {/* step 5      step 6 */}
        <AddTodoForm addNewTodo={addNewTodo} todoItems={todos} />
        {/* <button onClick={addTodo}>Add new todo</button> */}
      </div>
    </div>
  );
}

export default App;
