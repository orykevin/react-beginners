import { useState } from "react";
import { Button } from "./components/Button";
import "./App.css";
import { TodoCard } from "./components/TodoCard";
import { getTodoLocalStorage, updateTodoLocalStorage } from "./misc/utils";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState(getTodoLocalStorage());

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim() === "") return; // cek apakah input kosong

    const newTodo = {
      id: Date.now(),
      name: input,
      isFinished: false,
    };
    const newTodoList = [...list, newTodo];
    updateTodoLocalStorage(newTodoList);
    setList(newTodoList);

    setInput("");
  };

  return (
    <>
      <h1>React ToDo</h1>
      <form className="form-container" onSubmit={addTodo}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button>Tambah</Button>
      </form>
      <div className="list-container">
        {list
          .filter((todo) => !todo.isFinished)
          .map((todo) => (
            <TodoCard
              todo={todo}
              key={todo.id}
              setList={setList}
              index={todo.id}
            />
          ))}
      </div>
      <div className="list-container">
        <h4>List Selesai</h4>
        {list
          .filter((todo) => todo.isFinished)
          .map((todo) => (
            <TodoCard
              todo={todo}
              key={todo.id}
              setList={setList}
              index={todo.id}
            />
          ))}
      </div>
    </>
  );
}

export default App;
