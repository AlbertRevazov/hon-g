import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface BreadcrumbItem {
  label: string
  path?: string
}

export const Breadcrumb: React.FC = () => {
  const location = useLocation()

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = location.pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Главная', path: '/' }]

    if (paths[0] === 'invitation' && paths[1]) {
      breadcrumbs.push({
        label: 'Приглашения',
        path: '/',
      })
      breadcrumbs.push({
        label: `Приглашение ${paths[1]}`,
      })
    } else if (paths[0] === 'rsvp' && paths[1] === 'success') {
      breadcrumbs.push({
        label: 'Успешное подтверждение',
      })
    } else if (paths[0] === 'rsvp' && paths[1] === 'error') {
      breadcrumbs.push({
        label: 'Ошибка подтверждения',
      })
    }

    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs()

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      {breadcrumbs.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {index > 0 && <span className="text-gray-400">/</span>}
          {item.path ? (
            <Link to={item.path} className="hover:text-blue-600 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}
