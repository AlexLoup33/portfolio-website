import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import router from './router'
import App from './App.vue'
import "@/assets/main.scss"
import FR from './locale/fr.json'
import EN from './locale/en.json'
import JP from './locale/jp.json'

const i18n = createI18n({
    legacy: false,
    locale: 'FR',
    fallbackLocale: 'FR',
    messages: {
        FR,
        EN,
        JP
    }
})

createApp(App).use(router).use(i18n).mount('#app')
