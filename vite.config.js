import { defineConfig } from 'vite'
import { resolve } from 'path'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  build: {
    outDir: 'dist', // Configure o diretório de saída
  },
  // Outras configurações do Vite
})
