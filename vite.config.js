import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        tugas30_1: "tugas30-1.html",
        tugas30_2: "tugas30-2.html",
        tugas30_3: "tugas30-3.html",
        tugas30_4: "tugas30-4.html",
        tugas30_5: "tugas30-5.html",
        tugas30_6: "tugas30-6.html",
        tugas30_7: "tugas30-7.html"
      }
    }
  }
})
