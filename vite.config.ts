import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portifolio-henrique/", // Nome do seu repositório
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        format: 'esm', // Garantir que os arquivos sejam compatíveis com módulos ES
      },
    },
  },
})
