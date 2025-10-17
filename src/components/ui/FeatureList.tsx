import React from 'react'

interface FeatureListProps {
  features: string[]
  maxItems?: number
}

export const FeatureList: React.FC<FeatureListProps> = ({ features, maxItems = 3 }) => {
  return (
    <div className="flex flex-col space-y-1">
      {features.slice(0, maxItems).map((feature, index) => (
        <div key={index} className="flex items-center">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
          <span className="text-sm text-gray-600">{feature}</span>
        </div>
      ))}
    </div>
  )
}
