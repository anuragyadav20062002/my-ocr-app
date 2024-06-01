import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import shadcnui from '@shadcn/ui/plugin'

export default defineConfig({
  plugins: [react(), shadcnui()],
})