export const updateTodoLocalStorage = (newList) => {
  localStorage.setItem("todoList", JSON.stringify(newList));
};

export const getTodoLocalStorage = () => {
  const stringData = localStorage.getItem("todoList");
  return JSON.parse(stringData) || [];
};
