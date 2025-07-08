import { useState } from "react";
import { Button } from "./Button";

export const TodoCard = ({ todoText, setList, index } = props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState(todoText);

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
        <p>{todoText}</p>
      )}
      <div className="todo-action">
        {isEdit ? (
          <Button
            onClickEvent={() => {
              setIsEdit(false);
              setList((prev) =>
                prev.map((value, i) => (i === index ? input : value))
              );
            }}
          >
            Simpan
          </Button>
        ) : (
          <Button onClickEvent={() => setIsEdit(true)}>Ubah</Button>
        )}
        <Button
          onClickEvent={() => {
            setList((list) => list.filter((value, i) => i !== index));
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
