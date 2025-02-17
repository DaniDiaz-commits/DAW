import React, { useState } from "https://esm.sh/react@19.0.0-beta-04b058868c-20240508/?dev";

export function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index) => {
    setEditingIndex(index);
    setEditValue(tasks[index]);
  };

  const saveEdit = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editValue;
    setTasks(updatedTasks);
    setEditingIndex(null);
  };

  return React.createElement(
    "div",
    { className: "container" },
    React.createElement("h1", {}, "To-Do List"),
    React.createElement("input", {
      type: "text",
      value: inputValue,
      onInput: (e) => setInputValue(e.target.value),
      placeholder: "Añadir tarea...",
    }),
    React.createElement("button", { onClick: addTask }, "Agregar"),
    React.createElement(
      "ul",
      {},
      tasks.map((task, index) =>
        React.createElement(
          "li",
          { key: index, className: editingIndex === index ? "editing" : "" },
          editingIndex === index
            ? React.createElement("input", {
                type: "text",
                value: editValue,
                onInput: (e) => setEditValue(e.target.value),
              })
            : React.createElement("span", {}, task),
          React.createElement(
            "div",
            { className: "buttons" }, // Contenedor de botones alineados a la derecha
            editingIndex === index
              ? React.createElement(
                  "button",
                  { onClick: () => saveEdit(index), className: "save-button" },
                  "Guardar"
                )
              : React.createElement(
                  "button",
                  { onClick: () => editTask(index), className: "edit-button" },
                  "Editar"
                ),
            React.createElement(
              "button",
              { onClick: () => removeTask(index), className: "delete-button" },
              "X"
            )
          )
        )
      )
    )
  );
}
