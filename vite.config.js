import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    appType: "mpa",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                contact: resolve(__dirname, 'contact.html')
            },
        },
    },
})