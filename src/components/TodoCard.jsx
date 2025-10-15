import { useState } from "react";
import { Button } from "./Button";
import { updateTodoLocalStorage } from "../misc/utils";

export const TodoCard = ({ todo, setList, index } = props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState(todo.name);

  const handleSimpan = () => {
    setIsEdit(false);
    setList((lists) => {
      const newLists = lists.map((list) =>
        list.id === index ? { ...list, name: input } : list
      );
      updateTodoLocalStorage(newLists);
      return newLists;
    });
  };

  const handleHapus = () => {
    setList((lists) => {
      const newLists = lists.filter((list) => list.id !== index);
      updateTodoLocalStorage(newLists);
      return newLists;
    });
  };

  const handleSelesai = () => {
    setList((lists) => {
      const newLists = lists.map((list) =>
        list.id === index ? { ...list, isFinished: true } : list
      );
      updateTodoLocalStorage(newLists);
      return newLists;
    });
  };

  return (
    <div className="todo-card-container">
      {isEdit ? (
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      ) : (
        <p style={todo.isFinished ? { textDecoration: "line-through" } : {}}>
          {todo.name}
        </p>
      )}
      <div className="todo-action">
        {isEdit ? (
          <Button onClickEvent={handleSimpan}>Simpan</Button>
        ) : (
          <Button onClickEvent={() => setIsEdit(true)}>Ubah</Button>
        )}
        <Button onClickEvent={handleHapus}>Hapus</Button>
        {!todo.isFinished && (
          <Button onClickEvent={handleSelesai}>Selesai</Button>
        )}
      </div>
    </div>
  );
};
