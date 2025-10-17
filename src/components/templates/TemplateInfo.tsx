import React from 'react'
import { Template } from '../../types/template'
import { FeatureList } from '../ui/FeatureList'

interface TemplateInfoProps {
  template: Template
}

export const TemplateInfo: React.FC<TemplateInfoProps> = ({ template }) => {
  return (
    <div className="flex flex-col flex-1">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{template.name}</h3>

      <p className="text-gray-600 mb-4 flex-1">{template.description}</p>

      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Особенности:</h4>
        <FeatureList features={template.features} />
      </div>
    </div>
  )
}
