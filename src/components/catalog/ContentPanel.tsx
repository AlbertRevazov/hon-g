import React from 'react'
import { SearchSection, TemplatesGrid } from '../catalog'
import { Template } from '../../types/template'

interface ContentPanelProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  templates: Template[]
  onSelectTemplate: (template: Template) => void
}

export const ContentPanel: React.FC<ContentPanelProps> = ({
  searchQuery,
  onSearchChange,
  templates,
  onSelectTemplate,
}) => {
  return (
    <div className="lg:w-3/4">
      <SearchSection searchQuery={searchQuery} onSearchChange={onSearchChange} />

      <TemplatesGrid templates={templates} onSelectTemplate={onSelectTemplate} />
    </div>
  )
}
