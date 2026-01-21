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
                'case-study-inventory': resolve(__dirname, 'case-study-inventory-system.html'),
                'case-study-donor': resolve(__dirname, 'case-study-donor-portal.html'),
            },
        },
    },
})
