/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			// Кастомные цвета
			colors: {
				primary: {
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
					950: '#082f49',
				},
				secondary: {
					50: '#fdf4ff',
					100: '#fae8ff',
					200: '#f5d0fe',
					300: '#f0abfc',
					400: '#e879f9',
					500: '#d946ef',
					600: '#c026d3',
					700: '#a21caf',
					800: '#86198f',
					900: '#701a75',
					950: '#4a044e',
				},
				accent: {
					50: '#fff7ed',
					100: '#ffedd5',
					200: '#fed7aa',
					300: '#fdba74',
					400: '#fb923c',
					500: '#f97316',
					600: '#ea580c',
					700: '#c2410c',
					800: '#9a3412',
					900: '#7c2d12',
					950: '#431407',
				},
				// Градиенты
				gradient: {
					start: '#667eea',
					end: '#764ba2',
				},
			},

			// Кастомные шрифты
			fontFamily: {
				sans: [
					'Inter',
					'system-ui',
					'sans-serif',
				],
				serif: [
					'Playfair Display',
					'serif',
				],
				mono: [
					'Fira Code',
					'monospace',
				],
				display: [
					'Poppins',
					'sans-serif',
				],
			},

			// Кастомные размеры текста
			fontSize: {
				xs: [
					'0.75rem',
					{
						lineHeight: '1rem',
					},
				],
				sm: [
					'0.875rem',
					{
						lineHeight: '1.25rem',
					},
				],
				base: [
					'1rem',
					{
						lineHeight: '1.5rem',
					},
				],
				lg: [
					'1.125rem',
					{
						lineHeight: '1.75rem',
					},
				],
				xl: [
					'1.25rem',
					{
						lineHeight: '1.75rem',
					},
				],
				'2xl': [
					'1.5rem',
					{
						lineHeight: '2rem',
					},
				],
				'3xl': [
					'1.875rem',
					{
						lineHeight: '2.25rem',
					},
				],
				'4xl': [
					'2.25rem',
					{
						lineHeight: '2.5rem',
					},
				],
				'5xl': [
					'3rem',
					{ lineHeight: '1' },
				],
				'6xl': [
					'3.75rem',
					{ lineHeight: '1' },
				],
				'7xl': [
					'4.5rem',
					{ lineHeight: '1' },
				],
				'8xl': [
					'6rem',
					{ lineHeight: '1' },
				],
				'9xl': [
					'8rem',
					{ lineHeight: '1' },
				],
			},

			// Кастомные тени
			boxShadow: {
				soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
				medium: '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
				large: '0 10px 40px -10px rgba(0, 0, 0, 0.25)',
			},

			// Кастомные анимации
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.3s ease-out',
				'bounce-gentle':
					'bounceGentle 2s infinite',
			},

			keyframes: {
				fadeIn: {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					},
				},
				slideUp: {
					'0%': {
						transform: 'translateY(10px)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1',
					},
				},
				bounceGentle: {
					'0%, 100%': {
						transform: 'translateY(0)',
					},
					'50%': {
						transform: 'translateY(-5px)',
					},
				},
			},

			// Кастомные spacing
			spacing: {
				18: '4.5rem',
				88: '22rem',
				128: '32rem',
			},

			// Кастомные borderRadius
			borderRadius: {
				'4xl': '2rem',
				'5xl': '2.5rem',
			},
		},
	},
	plugins: [],
}
