<template>
  <footer>
    &copy; <span>{{ currentYear }}</span>
    <small>
      Create with 💚 by <a href="https://github.com/LuisSempre">Luis Lucas</a>
    </small>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
