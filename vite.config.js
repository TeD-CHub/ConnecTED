import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            injectRegister: 'auto',
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg}']
            },
            manifest: {
                name: "ConnecTED",
                short_name: "ConnecTED",
                icons: [
                    {
                        src: "/web-app-manifest-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                        purpose: "maskable"
                    },
                    {
                        src: "/web-app-manifest-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "maskable"
                    }
                ],
                theme_color: "#ffffff",
                background_color: "#ffffff",
                display: "standalone",
                start_url: "/",
                scope: "/"
            }
        })
    ],
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
