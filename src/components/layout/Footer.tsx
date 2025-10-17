import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3">
            <img
              src="/images/footer_logo.webp"
              loading="lazy"
              alt="Onaeg logo"
              width={30}
              height={30}
              className="rounded"
            />
            <div>
              <div className="font-semibold">Honaeg Invitations</div>
              <div className="text-gray-400 text-sm">© 2025 Все права защищены</div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-300 text-sm">
              Проект разработан при технической поддержке{' '}
              <span className="text-green-400 font-medium">Ревазов Альберт Русланович</span>
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Создаем уникальные цифровые приглашения для ваших особенных мероприятий. От свадеб до
              корпоративных событий — каждый шаблон продуман до мелочей.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
