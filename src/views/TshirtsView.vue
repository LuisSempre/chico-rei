<template>
  <div class="flex flex-col justify-center items-center">
    <select v-model="selectedRoute" v-on:change="navigate">
      <option value="/sweatshirts">Sweatshirts</option>
      <option value="/tshirts">Tshirts</option>
      <option value="/shirts">Shirts</option>
    </select>
    <RouterView />
    <Tshirts />
  </div>
</template>
<script>
import Tshirts from '../components/Tshirts.vue';

export default {
    data() {
        return {
            selectedRoute: "/tshirts"
        };
    },
    methods: {
        navigate() {
            this.$router.push(this.selectedRoute);
        }
    },
    components: { Tshirts }
}
</script>