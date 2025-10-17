import React from 'react'
import { Template } from '../../types/template'
import { Badge } from '../ui/Badge'

interface TemplatePreviewProps {
  template: Template
}

export const TemplatePreview: React.FC<TemplatePreviewProps> = ({ template }) => {
  return (
    <div className="flex flex-col mb-4">
      <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-semibold">
        {template.name}
      </div>
      {template.isPopular && (
        <div className="flex justify-end mt-2">
          <Badge variant="popular">Популярный</Badge>
        </div>
      )}
    </div>
  )
}
