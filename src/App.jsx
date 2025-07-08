import { useState } from "react";
import { Button } from "./components/Button";
import "./App.css";
import { TodoCard } from "./components/TodoCard";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  return (
    <>
      <h1>React ToDo</h1>
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(input);
          setInput("");
          setList([...list, input]);
        }}
      >
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button>Submit</Button>
      </form>
      <div className="list-container">
        {list.map((todo, index) => (
          <TodoCard
            todoText={todo}
            key={index}
            setList={setList}
            index={index}
          />
        ))}
      </div>
    </>
  );
}

export default App;
