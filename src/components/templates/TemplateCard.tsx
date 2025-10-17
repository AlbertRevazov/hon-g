import React from 'react'
import { Card } from '../ui'
import { TemplatePreview } from './TemplatePreview'
import { TemplateInfo } from './TemplateInfo'
import { TemplateActions } from './TemplateActions'
import { Template } from '../../types/template'

interface TemplateCardProps {
  template: Template
  onSelect: (template: Template) => void
}

export const TemplateCard: React.FC<TemplateCardProps> = ({ template, onSelect }) => {
  return (
    <Card padding="lg" className="flex flex-col h-full">
      <TemplatePreview template={template} />
      <TemplateInfo template={template} />
      <TemplateActions template={template} onSelect={onSelect} />
    </Card>
  )
}
