import { useSelector, useDispatch } from "react-redux";

import { todoAction } from "../store/todoSlice";

import { ListGroup, Button } from "react-bootstrap";

const Todos = () => {
  const { todos } = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  return (
    <div className="mb-5">
      {todos.length > 0 ? (
        <>
          <h2 className="h-4 fw-light border-bottom pb-2 mb-4">Todo[s]</h2>
          <ListGroup>
            {todos.map((todo) => {
              return (
                <ListGroup.Item key={todo.id}>
                  <div className="d-flex align-items-center justify-content-between">
                    <span>{todo.todo}</span>

                    <Button
                      variant="danger"
                      onClick={() =>
                        dispatch(todoAction.removeTodo({ id: todo.id }))
                      }
                    >
                      Delete
                    </Button>
                  </div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </>
      ) : (
        <h2 className="h-4 fw-light text-center">No Todo[s] Found!</h2>
      )}
    </div>
  );
};

export default Todos;
