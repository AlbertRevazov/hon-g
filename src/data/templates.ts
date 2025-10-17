import { Template, TemplateCategory } from '../types/template'

export const categoriesData: TemplateCategory[] = [
  {
    id: 'wedding',
    name: 'Свадебные',
    description: 'Элегантные шаблоны для свадебных приглашений',
    icon: '💍',
  },
  {
    id: 'birthday',
    name: 'Дни рождения',
    description: 'Яркие и праздничные шаблоны',
    icon: '🎂',
  },
  {
    id: 'corporate',
    name: 'Корпоративные',
    description: 'Официальные приглашения для бизнес-мероприятий',
    icon: '💼',
  },
  {
    id: 'other',
    name: 'Другие мероприятия',
    description: 'Универсальные шаблоны для любых событий',
    icon: '🎉',
  },
]

export const templatesData: Template[] = [
  {
    id: 'elegant-wedding',
    name: 'Элегантная свадьба',
    description: 'Классический дизайн с золотыми акцентами для торжественных мероприятий',
    category: 'wedding',
    previewImage: '/images/templates/elegant-wedding-preview.jpg',
    isPopular: true,
    features: [
      'Золотые акценты',
      'Элегантная типографика',
      'Фото галерея',
      'Карта локации',
      'RSVP форма',
    ],
    styles: {
      colors: ['#f8f5f0', '#d4af37', '#2c2c2c', '#ffffff'],
      fonts: ['Playfair Display', 'Lora', 'Open Sans'],
      layout: 'elegant',
    },
  },
  {
    id: 'modern-birthday',
    name: 'Современный день рождения',
    description: 'Яркий и современный дизайн с геометрическими элементами',
    category: 'birthday',
    previewImage: '/images/templates/modern-birthday-preview.jpg',
    isPopular: true,
    features: [
      'Геометрические узоры',
      'Яркая цветовая палитра',
      'Таймер обратного отсчета',
      'Социальные кнопки',
      'Адаптивный дизайн',
    ],
    styles: {
      colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9c80e'],
      fonts: ['Montserrat', 'Poppins', 'Roboto'],
      layout: 'modern',
    },
  },
  {
    id: 'minimal-corporate',
    name: 'Минималистичный корпоративный',
    description: 'Чистый и профессиональный дизайн для бизнес-мероприятий',
    category: 'corporate',
    previewImage: '/images/templates/minimal-corporate-preview.jpg',
    isPopular: false,
    features: [
      'Минималистичный дизайн',
      'Профессиональная типографика',
      'Программа мероприятия',
      'Контактная информация',
      'Дресс-код',
    ],
    styles: {
      colors: ['#2c3e50', '#34495e', '#ecf0f1', '#ffffff'],
      fonts: ['Inter', 'Helvetica', 'Arial'],
      layout: 'minimal',
    },
  },
  {
    id: 'creative-party',
    name: 'Креативная вечеринка',
    description: 'Яркий и нестандартный дизайн для тематических вечеринок',
    category: 'other',
    previewImage: '/images/templates/creative-party-preview.jpg',
    isPopular: false,
    features: [
      'Нестандартная сетка',
      'Анимации',
      'Интерактивные элементы',
      'Кастомная графика',
      'Видео фон',
    ],
    styles: {
      colors: ['#e84393', '#fd79a8', '#fdcb6e', '#00cec9'],
      fonts: ['Comic Neue', 'Nunito', 'Quicksand'],
      layout: 'creative',
    },
  },
]
