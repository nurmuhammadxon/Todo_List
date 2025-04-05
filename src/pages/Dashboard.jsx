import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegCircleCheck, FaCircleCheck, FaTrash } from "react-icons/fa6";
import { toggleCompleted, moveToTrash } from '../store/counterSlice'

function Dashboard() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.value);

    const handleToggleCompleted = (id) => {
        dispatch(toggleCompleted(id));
    };

    const handleRemoveTodo = (id) => {
        dispatch(moveToTrash(id));
    };

    return (
        <div className='max-w-[1024px] w-full h-screen mx-auto py-5 px-4'>
            <h1 className='text-4xl text-indigo-600 font-extrabold'>Todo List</h1>
            <ul className='w-[90%] mx-auto mt-10 text-white flex flex-col items-center gap-4 justify-center'>
                {todos.slice(0, 5).filter(todo => !todo.trashed).map(todo => (
                    <li
                        key={todo.id}
                        className={`w-full py-3 px-4 rounded-lg flex items-center justify-between ${todo.important ? 'bg-yellow-500' : 'bg-gray-800'}`}
                    >
                        <span className={`relative w-7/8 text-xl ${todo.completed ? 'text-white/60' : ''}`}>
                            {todo.title}
                            <span
                                className={`absolute top-1/2 left-0 w-full h-0.5 bg-red-600 
                                ${todo.completed ? 'block' : 'hidden'} transition-all duration-300`}
                            ></span>
                        </span>
                        <span className='flex gap-3'>
                            <button
                                onClick={() => handleToggleCompleted(todo.id)}
                                className={`rounded-full size-5 text-xl cursor-pointer hover:scale-125 transition duration-300
                                ${todo.completed ? 'bg-white' : ''}`}
                            >
                                {todo.completed ? (
                                    <FaCircleCheck className='text-green-500' />
                                ) : (
                                    <FaRegCircleCheck />
                                )}
                            </button>
                            <button
                                onClick={() => handleRemoveTodo(todo.id)}
                                className='text-xl text-red-600 cursor-pointer hover:scale-125 transition duration-300'
                            >
                                <FaTrash />
                            </button>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;