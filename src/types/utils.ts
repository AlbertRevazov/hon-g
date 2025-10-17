export interface DateFormatOptions {
  locale?: 'ru' | 'en'
  format?: 'full' | 'short' | 'monthYear' | 'time'
}

export interface ValidationResult {
  isValid: boolean
  errors: string[]
}

export interface FilterOptions {
  category?: string
  searchQuery?: string
  isActive?: boolean
  sortBy?: 'date' | 'title'
}
