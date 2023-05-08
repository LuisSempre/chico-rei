<template>
  <div class="flex flex-col justify-start items-start max-w-6xl mx-auto gap-4 px-8 h-screen">
    <select v-model="selectedRoute" v-on:change="navigate" class="bg-white border border-black">
      <option value="/sweatshirts" class="">Moletons</option>
      <option value="/tshirts">Camisetas</option>
      <option value="/shirts">Camisas</option>
    </select>
    <RouterView />
    <SweatShirts />
  </div>
</template>

<script>
import SweatShirts from '../components/SweatShirts.vue';

export default {
    data() {
        return {
            selectedRoute: "/sweatshirts"
        };
    },
    methods: {
        navigate() {
            this.$router.push(this.selectedRoute);
        }
    },
    components: { SweatShirts }
}
</script>
