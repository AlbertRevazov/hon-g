import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="text-6xl font-bold text-gray-300 mb-4">404</div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Страница не найдена</h1>

        <p className="text-gray-600 mb-8 text-lg">
          Запрошенная страница не существует или была перемещена. Проверьте URL или вернитесь на
          главную страницу.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            На главную
          </Link>
          <button
            onClick={() => window.history.back()}
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Назад
          </button>
        </div>
      </div>
    </div>
  )
}
