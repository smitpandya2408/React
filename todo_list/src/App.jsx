import React, { useEffect, useState } from "react";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [boolean, setBoolean] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todolistData")) || []
  );

  function handleAdd() {
    setTodolist([inputText, ...todolist]);
    setInputText("");
  }

  function handleDelete(index) {
    let deleteData = todolist.filter((item, i) => i !== index);
    setTodolist(deleteData);
  }

  function handleEdit(index) {
    setInputText(todolist[index]);
    setBoolean(true);
    setEditIndex(index);
  }

  function handleUpdate() {
    let updateData = todolist.map((item, i) =>
      i === editIndex ? inputText : item
    );
    setTodolist(updateData);
    setBoolean(false);
    setInputText("");
    setEditIndex(null);
  }

  useEffect(() => {
    localStorage.setItem("todolistData", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <div>
      <h1>Todolist</h1>
      <input
        placeholder="Enter your task"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      {boolean ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAdd}>Add Task</button>
      )}
      <div>
        {todolist.map((todo, index) => (
          <div key={index}>
            <p>{todo}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
