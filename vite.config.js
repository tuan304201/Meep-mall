import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  eslint: false,
  lintOnSave: false,
  plugins: [vue()],
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
})
