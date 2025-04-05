import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { restoreTodo, permanentlyDeleteTodo } from '../store/counterSlice';

function TrashTodo() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.value);

    const trashedTodos = todos.filter(todo => todo.trashed);

    const handleRemove = () => {
        
    }

    return (
        <div className='max-w-[1024px] w-full h-screen mx-auto py-5 px-4'>
            <h2 className='text-4xl text-indigo-600 font-extrabold'>
                🗑️ Trash
            </h2>
            <ul className='w-[90%] mx-auto mt-10 text-white flex flex-col items-center gap-4 justify-center'>
                {trashedTodos.map(todo => (
                    <li key={todo.id} className='bg-gray-800 w-full p-4 rounded-lg flex justify-between items-center'>
                        <span
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                color: todo.completed ? 'red' : 'white'
                            }}
                        >
                            {todo.title}
                        </span>

                        <div className='flex gap-4'>
                            <button
                                onClick={() => dispatch(restoreTodo(todo.id))}
                                className='bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded-lg'
                            >
                                ♻️ Restore
                            </button>

                            <button
                                onClick={() => dispatch(permanentlyDeleteTodo(todo.id))}
                                className='bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-lg'
                            >
                                ❌ Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TrashTodo;