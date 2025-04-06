import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function RootLayout() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main className='mt-20 lg:mt-24 bg-gray-600'>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout