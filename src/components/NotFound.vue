<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Page non trouvée</p>
    <router-link to="/home">Retour à l'accueil</router-link>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  text-align: center;
}

h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

a {
  padding: 0.75rem 1.5rem;
  background-color: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: 0.25rem;
  transition: background-color 0.3s;
}

a:hover {
  background-color: var(--color-primary-dark);
}
</style>
