import { Form, InputGroup, Button, Row, Col } from "react-bootstrap";

const TodoForm = ({ submitHandler, todoInput, todoInputHandler }) => {
  return (
    <Form onSubmit={submitHandler} className="mb-5 mx-auto">
      <Row>
        <Col className="my-2">
          <InputGroup>
            <InputGroup.Text>Todo</InputGroup.Text>
            <Form.Control
              type="text"
              id="todo-input"
              value={todoInput}
              onChange={todoInputHandler}
              required
            />
          </InputGroup>
        </Col>
        <Col xs={12} sm={3} className="d-grid my-2">
          <Button type="submit" variant="primary" className="px-3">
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default TodoForm;
