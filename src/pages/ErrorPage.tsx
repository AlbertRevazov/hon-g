import React from 'react'
import { Link } from 'react-router-dom'

export const ErrorPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center border border-red-200">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Произошла ошибка</h1>

        <p className="text-gray-600 mb-8 text-lg">
          При отправке вашего ответа произошла техническая ошибка. Пожалуйста, попробуйте еще раз
          или свяжитесь с организатором.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Вернуться к каталогу
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Попробовать снова
          </button>
        </div>
      </div>
    </div>
  )
}
