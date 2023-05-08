<template>
  <div>
    <div class="flex flex-col justify-start items-start max-w-6xl mx-auto gap-4 px-8">
      <select v-model="selectedRoute" v-on:change="navigate" class="bg-white border border-black">
        <option value="/sweatshirts" class="">Moletons</option>
        <option value="/tshirts">Camisetas</option>
        <option value="/shirts">Camisas</option>
      </select>
      <RouterView />
    </div>
    <Shirts />
  </div>
</template>
<script>
import Shirts from '../components/Shirts.vue'

export default {
  data() {
    return {
      selectedRoute: '/shirts'
    }
  },
  methods: {
    navigate() {
      this.$router.push(this.selectedRoute)
    }
  },
  components: { Shirts }
}
</script>
