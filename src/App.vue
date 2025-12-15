<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const changeLocale = (lang: string) => {
  locale.value = lang
}
</script>

<template>
  <!-- HEADER -->
   <header>
    <nav>
      <ul>
        <li>
          <router-link to="/home">{{ $t('nav.home') }}</router-link>
        </li>
        <li>
          <router-link to="/work">{{ $t('nav.work') }}</router-link>
        </li>
        <li>
          <router-link to="/blog">{{ $t('nav.blog') }}</router-link>
        </li>
        <li class="language-selector">
          <select @change="changeLocale(($event.target as HTMLSelectElement).value)" :value="locale">
            <option value="FR">FR</option>
            <option value="EN">EN</option>
            <option value="JP">JP</option>
          </select>
        </li>
      </ul>
    </nav>
   </header>

  <!-- APP -->
  <div id="app">
    <div>
      <router-view />
    </div>
  </div>

  <!-- FOOTER -->
   <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>{{ $t('footer.contact') }}</h3>
        <p>
          <a href="mailto:alexloup.dev@gmail.com">alexloup.dev@gmail.com</a>
        </p>
      </div>
      
      <div class="footer-section">
        <h3>{{ $t('footer.followMe') }}</h3>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/alexandre-lp/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.github.com/AlexLoup33" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://x.com/AlexLoup_dev" target="_blank" rel="noopener noreferrer">X</a>
        </div>
      </div>
      
      <div class="footer-section">
        <h3>{{ $t('footer.navigation') }}</h3>
        <nav class="footer-nav">
          <router-link to="/">{{ $t('nav.home') }}</router-link>
          <router-link to="/work">{{ $t('nav.work') }}</router-link>
          <router-link to="/blog">{{ $t('nav.blog') }}</router-link>
        </nav>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} Alexandre LP. {{ $t('footer.copyright') }}</p>
    </div>
   </footer>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
