export interface Template {
  id: string
  name: string
  description: string
  category: 'wedding' | 'birthday' | 'corporate' | 'other'
  previewImage: string
  price?: number 
  isPopular: boolean
  features: string[]
  styles: {
    colors: string[]
    fonts: string[]
    layout: 'elegant' | 'modern' | 'minimal' | 'creative'
  }
}

export interface TemplateCategory {
  id: string
  name: string
  description: string
  icon: string
}
