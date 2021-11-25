import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { todoAction } from "./store/todoSlice";

import { Container } from "react-bootstrap";

import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

import { idGen } from "./utilities/utils";

function App() {
  const { todos } = useSelector((store) => store.todos);
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState("");

  const todoInputHandler = (event) => setTodoInput(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    if (todoInput.trim().length === 0) return;

    const id = idGen(),
      todo = todoInput.trim();

    dispatch(todoAction.addTodo({ id, todo }));
    setTodoInput("");
  };

  return (
    <>
      <h1 className="text-center p-3 display-5 bg-primary text-white mb-5">
        My TODO
      </h1>

      <Container style={{ maxWidth: "660px", padding: "0 1.3rem" }}>
        <TodoForm
          submitHandler={submitHandler}
          todoInput={todoInput}
          todoInputHandler={todoInputHandler}
        />

        <Todos />
      </Container>
    </>
  );
}

export default App;
