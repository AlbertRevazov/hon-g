import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [
		tsconfigPaths(),
		tailwindcss(),
		react({
			babel: {
				plugins: [
					[
						'babel-plugin-react-compiler',
					],
				],
			},
		}),
	],
	server: {
		port: 3000,
	},
})
