<template>
  <div class="flex justify-center items-center">
    <select v-model="selectedRoute" v-on:change="navigate">
      <option value="/sweatshirts">Sweatshirts</option>
      <option value="/tshirts">Tshirts</option>
      <option value="/shirts">Shirts</option>
    </select>
    <RouterView />
  <h1>Sweatshirts</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedRoute: '/sweatshirts'
    }
  },
  methods: {
    navigate() {
      this.$router.push(this.selectedRoute)
    }
  }
}
</script>