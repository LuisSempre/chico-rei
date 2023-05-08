<template>
  <div class="max-w-7xl mx-auto p-8 justify-center items-center h-full">
    <ul role="list" class="grid grid-cols-2 gap-8 md:grid-cols-3">
      <li v-for="file in files" :key="file.source" class="relative">
          <div>
            <img :src="file.source" alt="" class="w-62 rounded-md" />
          </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const files = [
  {
    source: 'SweatShirts/1.avif'
  },
  {
    source: 'SweatShirts/2.avif'
  },
  {
    source: 'SweatShirts/3.avif'
  },
  {
    source: 'SweatShirts/4.avif'
  },
  {
    source: 'SweatShirts/5.avif'
  },
  {
    source: 'SweatShirts/6.avif'
  },
  {
    source: 'SweatShirts/7.avif'
  },
  {
    source: 'SweatShirts/8.avif'
  },
  {
    source: 'SweatShirts/9.avif'
  }
]
</script>
