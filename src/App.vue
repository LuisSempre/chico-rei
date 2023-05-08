<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from '@/components/Footer.vue'
import Menu from '@/components/Menu.vue'
</script>

<template>
  <div>
    <Menu />
    <div class="py-8 flex justify-center items-center max-w-6xl mx-auto gap-4 font-bold">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">Router</RouterLink>
      <RouterLink to="/shopping">Checkout</RouterLink>
    </div>
    <RouterView />
    <Footer />
  </div>
</template>
