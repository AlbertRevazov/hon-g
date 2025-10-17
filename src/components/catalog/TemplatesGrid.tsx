import React from 'react'
import { TemplateCard } from '../templates'
import { Template } from '../../types/template'

interface TemplatesGridProps {
  templates: Template[]
  onSelectTemplate: (template: Template) => void
}

export const TemplatesGrid: React.FC<TemplatesGridProps> = ({ templates, onSelectTemplate }) => {
  if (templates.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Шаблоны не найдены</h3>
        <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-6">
      {templates.map(template => (
        <div key={template.id} className="flex-1 min-w-[300px] max-w-[400px]">
          <TemplateCard template={template} onSelect={onSelectTemplate} />
        </div>
      ))}
    </div>
  )
}
