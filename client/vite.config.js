import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1': {
        target: "https://mern-restaurant-5rre.onrender.com/api/v1",
        changeOrigin: true,
      },
    },
  },
})

