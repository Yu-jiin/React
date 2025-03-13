import { defineConfig } from "vite"

const viteConfig = defineConfig({
    server: {
        port: 3000,
    },
    preview: {
        port: 3010,
    }
})

export default viteConfig