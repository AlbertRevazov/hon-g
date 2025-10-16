import React from 'react'
import { useParams } from 'react-router-dom'

export const InvitationPage: React.FC = () => {
	const { id } = useParams<{ id: string }>()

	return (
		<div className='container mx-auto px-4 max-w-4xl'>
			<div className='bg-white rounded-lg shadow-lg p-8 border border-gray-200'>
				<div className='text-center mb-8'>
					<h1 className='text-3xl font-bold text-gray-900 mb-4'>
						Приглашение:{' '}
						{id}
					</h1>
					<p className='text-gray-600'>
						Детальная
						страница
						приглашения
						будет
						здесь
					</p>
				</div>

				<div className='space-y-6'>
					<div className='border-t border-gray-200 pt-6'>
						<h2 className='text-xl font-semibold text-gray-800 mb-4'>
							Информация
							о
							мероприятии
						</h2>
						<p className='text-gray-600'>
							Здесь
							будет
							отображаться
							полная
							информация
							о
							приглашении,
							включая
							дату,
							время,
							место
							и
							описание
							мероприятия.
						</p>
					</div>

					<div className='border-t border-gray-200 pt-6'>
						<h2 className='text-xl font-semibold text-gray-800 mb-4'>
							Форма
							подтверждения
							участия
						</h2>
						<div className='bg-gray-50 p-4 rounded-lg'>
							<p className='text-gray-600 mb-4'>
								RSVP
								форма
								будет
								здесь
							</p>
							<button className='bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors'>
								Подтвердить
								участие
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
