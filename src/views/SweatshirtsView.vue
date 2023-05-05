<template>
  <div class="flex flex-col justify-center items-center">
    <select v-model="selectedRoute" v-on:change="navigate">
      <option value="/sweatshirts">Sweatshirts</option>
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