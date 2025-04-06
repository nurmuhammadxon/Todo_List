import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-indigo-600 mb-4">404</h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center">Sahifa topilmadi</h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 text-center max-w-xs sm:max-w-md">
        Kechirasiz, siz izlayotgan sahifa mavjud emas yoki o‘chirilgan bo‘lishi mumkin.
      </p>
      <Link
        to="/"
        className="px-4 py-2 sm:px-6 sm:py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-xl text-white text-sm sm:text-lg shadow-lg"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}

export default ErrorPage;