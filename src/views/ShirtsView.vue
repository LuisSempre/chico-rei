<template>
  <div class="flex flex-col justify-center items-center">
    <select v-model="selectedRoute" v-on:change="navigate">
      <option value="/sweatshirts">Sweatshirts</option>
      <option value="/tshirts">Tshirts</option>
      <option value="/shirts">Shirts</option>
    </select>
    <RouterView />
    <Shirts />
  </div>
</template>
<script>
import Shirts from '../components/Shirts.vue';

export default {
    data() {
        return {
            selectedRoute: "/shirts"
        };
    },
    methods: {
        navigate() {
            this.$router.push(this.selectedRoute);
        }
    },
    components: { Shirts }
}
</script>