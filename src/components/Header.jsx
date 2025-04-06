import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FcTodoList } from 'react-icons/fc';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

function Header() {
    const [isActive, setIsActive] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
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
        setMenuOpen(false);
    };

    const handleAddTodo = () => {
        navigate('/add');
        setIsActive(true);
        setMenuOpen(false);
    };

    return (
        <div className='bg-gray-800 text-white w-full py-7 px-6 md:px-8 flex items-center justify-between fixed top-0 left-0 z-50 shadow-lg'>
            <span className='text-3xl cursor-pointer' onClick={handleHomeTodo}>
                <FcTodoList />
            </span>

            {/* Hamburger button for mobile */}
            <button
                className='md:hidden text-4xl'
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>

            {/* Navigation - Desktop */}
            <nav className='hidden md:flex gap-4 items-center'>
                <ul className='flex lg:gap-4 items-center justify-between'>
                    {
                        navigationItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `rounded-md px-3 py-2 text-sm lg:text-xl font-medium transition duration-300 
                                        ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white'}`
                                    }
                                    onClick={() => setIsActive(false)}
                                >
                                    {item.name} {item.icon}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                <button
                    className={`ml-4 py-2 px-4  text-sm lg:text-xl bg-indigo-600 text-white font-semibold rounded-lg transition duration-300 
                    hover:bg-indigo-700 ${isActive ? 'opacity-70' : ''}`}
                    onClick={handleAddTodo}
                >
                    Add Todo
                </button>
            </nav>

            {/* Navigation - Mobile */}
            {menuOpen && (
                <div className='absolute top-[64px] left-0 w-full bg-gray-800 flex flex-col items-start gap-2 px-6 py-4 md:hidden z-40'>
                    {
                        navigationItems.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.path}
                                className={({ isActive }) =>
                                    `w-full py-2 px-4 rounded-md text-base font-medium transition 
                                    ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white'}`
                                }
                                onClick={() => {
                                    setIsActive(false);
                                    setMenuOpen(false);
                                }}
                            >
                                {item.name} {item.icon}
                            </NavLink>
                        ))
                    }
                    <button
                        className={`w-full mt-2 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg transition 
                        hover:bg-indigo-700 ${isActive ? 'opacity-70' : ''}`}
                        onClick={handleAddTodo}
                    >
                        Add Todo
                    </button>
                </div>
            )}
        </div>
    );
}

export default Header;