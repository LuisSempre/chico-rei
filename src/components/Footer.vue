<template>
  <footer class="flex justify-center items-center max-w-6xl mx-auto p-4">
    <small>
      Copyright &copy;
      {{ currentYear }}
      Create with 💚 by
      <a href="https://github.com/LuisSempre">Luis Lucas.</a>
    </small>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      currentYear: ''
    }
  },
  mounted() {
    const date = new Date()
    this.currentYear = date.getFullYear()
  }
}
</script>
