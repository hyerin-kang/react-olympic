// import React from "react";

import { useState } from "react";

const Basic = () => {
  const SAMPEL_TOTOS = [{ id: 1, text: "할일1" }];
  const [todos, setTodos] = useState(SAMPEL_TOTOS);
  const [todoText, setTodoText] = useState("");

  const handleTextChange = (e) => {
    setTodoText(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) {
      return;
    }
    setTodos([{ id: crypto.randomUUID(), text: todoText }, ...todos]);
    //값 비워주기
    setTodoText("");
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={todoText}
          onChange={handleTextChange}
        />
        <button type="submit">제출하기</button>
      </form>
      <ul>
        {todos.map(({ id, text }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Basic;
