import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: "https://github.com/rocha-henrique/portifolio-henrique", // 🔹 Adicione essa linha com o nome exato do repositório
  plugins: [react()],
})
