<template>
  <div class="flex flex-col justify-start items-start max-w-6xl mx-auto gap-4 px-8">
    <select v-model="selectedRoute" v-on:change="navigate" class="bg-white border border-black">
      <option value="/sweatshirts">Sweatshirts</option>
      <option value="/tshirts">Tshirts</option>
      <option value="/shirts">Shirts</option>
    </select>
    <RouterView />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedRoute: '/about'
    }
  },
  methods: {
    navigate() {
      this.$router.push(this.selectedRoute)
    }
  }
}
</script>
