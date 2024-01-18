import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const baseServerUrl = 'http://localhost:3000'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/auth': {
				target: `${baseServerUrl}/`,
				changeOrigin: true,
			},
		},
	},
})
