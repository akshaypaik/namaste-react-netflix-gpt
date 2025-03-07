import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
  ],
  define: {
    'process.env': {
      VITE_OPEN_API_KEY: "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",
      VITE_TMDB_API_KEY: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWJhNmZmNmY3MDA4YmQwMzE4Y2RmNzYwMGU3NjcyNiIsIm5iZiI6MTc0MTI2Mzk4MS4wNDEsInN1YiI6IjY3Yzk5NDZkNmZiNDAwMTM5MjBjZWIyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jro9Ek-yRaupUtqgTNub24ozSELx9c52QmPGIX0bxMw"

    }, // Define an empty object (or your variables here)
  },
})
