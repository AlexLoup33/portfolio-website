import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/unplugin-vue-i18n/vite'

export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      // Indique à Vite où trouver tes fichiers de langue
      include: path.resolve(__dirname, './src/locales/**'),
      // Désactive la vérification stricte pour éviter le crash sur le caractère '@'
      strictMessage: false,
      // On s'assure que le runtime est disponible pour compiler les messages complexes
      runtimeOnly: false 
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/global.scss";`
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})