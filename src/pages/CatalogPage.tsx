import React from 'react'
import { Link } from 'react-router-dom'

export const CatalogPage: React.FC = () => {
	return (
		<div className='container mx-auto px-4'>
			<div className='text-center mb-12'>
				<h1 className='text-4xl font-bold text-gray-900 mb-4'>
					Каталог Приглашений
				</h1>
				<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
					Выберите приглашение
					для просмотра
					деталей и
					подтверждения
					участия
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{/* Заглушки для будущих карточек приглашений */}
				<div className='bg-white rounded-lg shadow-md p-6 border border-gray-200'>
					<h3 className='text-lg font-semibold text-gray-800 mb-2'>
						Пример
						приглашения
					</h3>
					<p className='text-gray-600 mb-4'>
						Здесь
						будет
						описание
						приглашения...
					</p>
					<Link
						to='/invitation/sample-1'
						className='inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'
					>
						Посмотреть
					</Link>
				</div>
			</div>
		</div>
	)
}
