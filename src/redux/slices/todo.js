import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoslice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      if (action.payload !== "") {
        state.todos.push(action.payload);
      }
    },
    deleteTask: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, text } = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      if (todoIndex !== -1) {
        state.todos[todoIndex].inputValue = text;
      }
    },
    changeStatus: (state, action) => {
      const { taskId, newStatus } = action.payload;
      const task = state.todos.find((task) => task.id === taskId);
      if (task) {
        task.status = newStatus;
      }
    },
  },
});

export const { addTask, deleteTask, changeStatus,editTask } = todoslice.actions;

export default todoslice.reducer;
