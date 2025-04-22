import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Escuchar en todas las interfaces (requerido por Render)
    port: process.env.PORT || 3000, // Usa el puerto proporcionado por Render
  }
});
