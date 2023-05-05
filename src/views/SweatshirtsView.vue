<template>
  <div class="flex flex-col justify-start items-start max-w-6xl mx-auto gap-4">
    <select v-model="selectedRoute" v-on:change="navigate" class="bg-white border border-black py-2 mx-8">
      <option value="/sweatshirts" class="">Sweatshirts</option>
      <option value="/tshirts">Tshirts</option>
      <option value="/shirts">Shirts</option>
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