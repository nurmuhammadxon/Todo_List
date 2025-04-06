import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { restoreTodo, permanentlyDeleteTodo } from '../store/counterSlice';

function TrashTodo() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.value);

    const trashedTodos = todos.filter(todo => todo.trashed);

    return (
        <div className='max-w-4xl w-full min-h-screen mx-auto py-6 px-4'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl text-indigo-600 font-extrabold text-center sm:text-left'>
                🗑️ Trash
            </h2>
            <ul className='w-[90%] mx-auto mt-10 text-white flex flex-col items-center gap-4 justify-center'>
                {trashedTodos.map(todo => (
                    <li
                        key={todo.id}
                        className='w-full py-2.5 md:py-3 px-4 rounded-lg flex items-center justify-between bg-gray-800'
                    >
                        <span className='relative sm:w-1/2 text-base sm:text-lg md:text-xl text-red-500 break-words'>
                            {todo.title}
                            <span className='absolute top-1/2 left-0 w-full h-0.5 bg-red-600'></span>
                        </span>
                        <span className='flex gap-3'>
                            <button
                                onClick={() => dispatch(restoreTodo(todo.id))}
                                className='bg-green-600 hover:bg-green-700 text-white p-1 md:py-1.5 px-4 rounded-lg text-base md:text-xl transition duration-300'
                            >
                                ♻️ Restore
                            </button>
                            <button
                                onClick={() => dispatch(permanentlyDeleteTodo(todo.id))}
                                className='bg-red-600 hover:bg-red-700 text-white p-1 md:py-1.5 px-4 rounded-lg text-base md:text-xl transition duration-300'
                            >
                                ❌ Delete
                            </button>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TrashTodo;