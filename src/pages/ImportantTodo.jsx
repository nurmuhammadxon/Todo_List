import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaCircleCheck, FaRegCircleCheck, FaTrash, FaStar, FaRegStar } from "react-icons/fa6";
import { toggleCompleted, toogleImportant, moveToTrash } from '../store/counterSlice';

function ImportantTodo() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.value);

    const handleToggleCompleted = (id) => {
        dispatch(toggleCompleted(id));
    };

    const handleRemoveTodo = (id) => {
        dispatch(moveToTrash(id));
    };
    const handleToogleImportant = (id) => {
        dispatch(toogleImportant(id))
    };

    return (
        <div className='max-w-[1024px] w-full h-screen mx-auto py-5 px-4'>
            <h1 className='text-2xl sm:text-4xl md:text-5xl text-indigo-600 font-extrabold'>
                Important Todo List
            </h1>
            <ul className='w-[90%] mx-auto mt-10 text-white flex flex-col items-center gap-4 justify-center'>
                {todos.filter(todo => todo.important && !todo.trashed).map(todo => (
                    <li
                        key={todo.id}
                        className='w-full py-2.5 md:py-3 px-4 rounded-lg flex items-center justify-between bg-teal-600 relative'
                    >
                        <span
                            className='relative w-3/4 sm:w-4/5 lg:w-7/8 text-base md:text-xl'>
                            {todo.title}
                            <span
                                className={`absolute top-1/2 left-0 w-full h-0.5 bg-red-600 
                                ${todo.completed ? 'block' : 'hidden'}
                                `}></span>
                        </span>
                        <span className='flex gap-3'>
                            <button
                                onClick={() => handleToggleCompleted(todo.id)}
                                className={`rounded-full size-4 md:size-5 text-base md:text-xl cursor-pointer hover:scale-125 transition duration-300
                                    ${todo.completed ? 'bg-white' : ''}`}
                            >
                                {todo.completed ?
                                    <FaCircleCheck className='text-green-500' />
                                    : <FaRegCircleCheck />
                                }
                            </button>
                            <button
                                onClick={() => handleToogleImportant(todo.id)}
                                className='text-base md:text-xl cursor-pointer hover:scale-125 transition duration-300'
                            >
                                {todo.important ? (
                                    <FaStar className='text-yellow-500' />
                                ) : (
                                    <FaRegStar />
                                )}
                            </button>
                            <button
                                onClick={() => handleRemoveTodo(todo.id)}
                                className='text-base md:text-xl text-red-600 cursor-pointer hover:scale-125 transition duration-300'
                            >
                                <FaTrash />
                            </button>
                        </span>
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default ImportantTodo;