import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: "/portfolio-henrique/",  // Certifique-se que esse é o nome do repositório
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: undefined,  // Para evitar problemas de chunking
        format: 'esm', // Força a saída como módulos ES
      },
    },
  },
})
