import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'Todo',
    initialState: {
        value: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.value.push(action.payload)
        },
        toggleCompleted: (state, action) => {
            const todo = state.value.find(t => t.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        moveToTrash: (state, action) => {
            const todo = state.value.find(t => t.id === action.payload);
            if (todo) todo.trashed = true;
        },
        restoreTodo: (state, action) => {
            const todo = state.value.find(t => t.id === action.payload);
            if (todo) todo.trashed = false;
        },
        permanentlyDeleteTodo: (state, action) => {
            state.value = state.value.filter(t => t.id !== action.payload);
        }
    }
});

export const { addTodo, toggleCompleted, moveToTrash, restoreTodo, permanentlyDeleteTodo } = counterSlice.actions;
export default counterSlice.reducer;
