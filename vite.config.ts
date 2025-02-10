import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: "/portifolio-henrique/",  // Certifique-se de usar o nome correto do repositório
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: "/index.html",  // Certifique-se de que o arquivo de entrada está correto
    },
  },
});
