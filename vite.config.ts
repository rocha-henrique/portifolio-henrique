import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: "/portifolio-henrique/", // 🔹 Apenas o nome do repositório, com barras
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
})
