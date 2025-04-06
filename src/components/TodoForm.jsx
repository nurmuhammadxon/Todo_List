import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/counterSlice'

function TodoForm() {
    const [value, setValue] = useState('')
    const [important, setImportant] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: Date.now(),
            title: value,
            important: important,
            completed: false,
            trashed: false,
        }

        dispatch(addTodo(newTodo))
        setValue('')
        setImportant(false)
    }

    return (
        <div className='max-w-[1024px] w-full min-h-screen mx-auto py-7 md:py-10 px-4 relative'>
            <form
                onSubmit={handleSubmit}
                className='bg-gray-900 w-full flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl shadow-lg'
            >
                <input
                    type="text"
                    placeholder='To do list...'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className='py-2 px-4 outline-none border-2 border-gray-700 bg-gray-800 rounded-xl text-sm sm:text-base md:text-lg w-full sm:w-2/3 text-white placeholder-gray-400'
                />
                <label className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-gray-300">
                    <span>Important</span>
                    <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                        <input
                            type="checkbox"
                            name="toggle"
                            id="toggle"
                            checked={important}
                            onChange={() => setImportant(!important)}
                            className="absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer 
                                transition-transform duration-200 ease-in-out 
                                checked:translate-x-4 checked:border-teal-600"
                        />
                        <span
                            className={`block overflow-hidden h-6 rounded-full transition-colors duration-300 ${important ? 'bg-teal-600' : 'bg-gray-500'
                                }`}
                        ></span>
                    </div>
                </label>
                <button
                    type="submit"
                    className='py-2 px-4 sm:py-3 sm:px-6 bg-indigo-600 text-white font-semibold 
                        text-sm sm:text-base md:text-lg rounded-lg transition duration-300 
                        ease-in-out hover:bg-indigo-700 cursor-pointer'
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default TodoForm