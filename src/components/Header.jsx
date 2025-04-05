import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FcTodoList } from 'react-icons/fc';

function Header() {
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();

    const navigationItems = [
        { name: "Dashboard", icon: "🏠", path: "/" },
        { name: "All", icon: "📋", path: '/all' },
        { name: "Important", icon: "⭐", path: "/important" },
        { name: "Completed", icon: "✔️", path: "/completed" },
        { name: "Trash", icon: "🗑️", path: "/trash" }
    ];

    const handleHomeTodo = () => {
        navigate('/');
        setIsActive(false);
    };

    const handleAddTodo = () => {
        navigate('/add');
        setIsActive(true)
    };

    return (
        <div className='bg-gray-800 text-white w-full py-5 px-8 flex items-center justify-between fixed top-0 left-0 z-50'>
            <span
                className='text-3xl cursor-pointer'
                onClick={handleHomeTodo}
            >
                <FcTodoList />
            </span>

            <nav className='flex gap-4 items-center'>
                <ul className='flex gap-4 items-center justify-between'>
                    {
                        navigationItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `rounded-md px-3 py-2 text-lg font-medium transition duration-500 ease-in-out 
                                        ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white'}`}
                                    onClick={() => setIsActive(false)}
                                >
                                    {item.name} {item.icon}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                <button
                    className={`py-3 px-6 bg-indigo-600 text-white font-semibold text-lg rounded-lg transition-transform duration-300 ease-in-out 
                    hover:bg-indigo-700 cursor-pointer ${isActive ? 'opacity-70' : ''}`}
                    onClick={handleAddTodo}
                >
                    Add Todo
                </button>
            </nav>
        </div>
    );
}

export default Header;