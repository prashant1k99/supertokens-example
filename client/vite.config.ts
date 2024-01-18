import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const baseServerUrl = 'http://localhost:3000'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		outDir: '../server/src/public',
	},
	server: {
		proxy: {
			'/auth': {
				target: `${baseServerUrl}/`,
				changeOrigin: true,
			},
			'/todo': {
				target: `${baseServerUrl}/`,
				changeOrigin: true,
			},
		},
	},
})
