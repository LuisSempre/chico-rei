<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Menu from './components/Menu.vue'
</script>

<template>
  <div class="">
    <Menu />
    <div class="p-8 flex justify-center items-center max-w-6xl mx-auto gap-4">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/shopping">Shopping</RouterLink>
    </div>
    <RouterView />
    <Footer />
  </div>
</template>
