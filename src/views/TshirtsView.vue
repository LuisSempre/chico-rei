<template>
  <div class="flex flex-col justify-start items-start max-w-6xl mx-auto gap-4">
    <select v-model="selectedRoute" v-on:change="navigate" class="bg-white border border-black py-2 mx-8">
      <option value="/sweatshirts" class="">Sweatshirts</option>
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