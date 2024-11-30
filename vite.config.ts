import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss'

export default defineConfig({

	server: {
		host: true,
		port: 5175,
		watch: {
			usePolling: true,
		}
	},
	plugins: [react()],
	build: {
		outDir: 'build'
	},
	css: {
		postcss: {
		  plugins: [tailwindcss()],
		},
	  }
});
