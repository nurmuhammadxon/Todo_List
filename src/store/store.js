import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './counterSlice';

const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});

export default store;
