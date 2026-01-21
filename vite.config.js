import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                portfolio: resolve(__dirname, 'portfolio.html'),
                contact: resolve(__dirname, 'contact.html'),
                'software-development': resolve(__dirname, 'software-development.html'),
                'web-development': resolve(__dirname, 'web-development.html'),
                'app-development': resolve(__dirname, 'app-development.html'),
                consulting: resolve(__dirname, 'consulting.html'),
                'case-study-inventory-system': resolve(__dirname, 'case-study-inventory-system.html'),
                'case-study-donor-portal': resolve(__dirname, 'case-study-donor-portal.html'),
            },
        },
    },
})
