import React from 'react'
import { Button } from '../ui'
import { Template } from '../../types/template'

interface TemplateActionsProps {
  template: Template
  onSelect: (template: Template) => void
}

export const TemplateActions: React.FC<TemplateActionsProps> = ({ template, onSelect }) => {
  return (
    <div className="flex mt-4">
      <Button variant="primary" onClick={() => onSelect(template)} className="flex-1">
        Выбрать шаблон
      </Button>
    </div>
  )
}
