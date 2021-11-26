import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "Todos",
  initialState: { todos: [] },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    editTodo(state, action) {
      const todoToEditId = action.payload.id;
      const newTodo = action.payload.todo;

      const todoToEdit = state.todos.find((todo) => todo.id === todoToEditId);
      todoToEdit.todo = newTodo;
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const todoAction = todoSlice.actions;

export default todoSlice;
