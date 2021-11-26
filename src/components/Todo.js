import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAction } from "../store/todoSlice";
import { Form, Button, ButtonGroup, InputGroup } from "react-bootstrap";
import { XCircleFill, PenFill } from "react-bootstrap-icons";

const Todo = ({ id, todo }) => {
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [todoInput, setTodoInput] = useState(todo);

  const dispatch = useDispatch();

  const updateHandler = () => {
    if (todoInput.trim().length === 0)
      return dispatch(todoAction.removeTodo({ id }));

    dispatch(todoAction.editTodo({ id, todo: todoInput }));
    setIsInEditMode(false);
  };

  return (
    <div className="d-flex gap-3 flex-column flex-sm-row align-items-center">
      {!isInEditMode ? (
        <div className="p-1">{todo}</div>
      ) : (
        <Form
          onSubmit={updateHandler}
          className="mr-5"
          style={{ width: "100%" }}
        >
          <InputGroup>
            <Form.Control
              type="text"
              value={todoInput}
              onChange={(event) => setTodoInput(event.target.value)}
              autoFocus
            />

            <Button>Update</Button>
          </InputGroup>
        </Form>
      )}

      <ButtonGroup className="ms-auto">
        {!isInEditMode ? (
          <Button
            type="button"
            variant="outline-primary"
            onClick={() => setIsInEditMode(true)}
          >
            <PenFill className="fs-5" />
          </Button>
        ) : (
          <Button
            type="button"
            variant="dark"
            onClick={() => {
              setIsInEditMode(false);
              setTodoInput(todo);
            }}
          >
            Cancel
          </Button>
        )}
        {!isInEditMode && (
          <Button
            type="button"
            variant="outline-danger"
            onClick={() => dispatch(todoAction.removeTodo({ id: id }))}
          >
            <XCircleFill className="fs-5" />
          </Button>
        )}
      </ButtonGroup>
    </div>
  );
};

export default Todo;
