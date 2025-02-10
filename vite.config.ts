import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portifolio-henrique/", // 🔹 Nome exato do repositório com barras
  plugins: [react()]
})
