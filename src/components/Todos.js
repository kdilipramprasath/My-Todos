import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import Todo from "./Todo";

const Todos = () => {
  const { todos } = useSelector((store) => store.todos);

  return (
    <div className="mb-5">
      {todos.length > 0 ? (
        <>
          <h2 className="h-4 fw-light border-bottom pb-2 mb-4">Todo[s]</h2>
          <ListGroup>
            {todos.map((todo) => {
              return (
                <ListGroup.Item key={todo.id}>
                  <Todo {...todo} />
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
