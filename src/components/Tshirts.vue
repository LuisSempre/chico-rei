<template>
  <div class="max-w-6xl mx-auto p-8 justify-center items-center h-full">
    <ul role="list" class="grid grid-cols-2 gap-8 md:grid-cols-3">
      <li v-for="file in files" :key="file.source" class="relative">
        <div class="flex flex-col lg:flex-row gap-4">
          <div>
            <img :src="file.source" alt="" class="w-62" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const files = [
  {
    source: 'Tshirts/1.avif'
  },
  {
    source: 'Tshirts/2.avif'
  },
  {
    source: 'Tshirts/3.avif'
  },
  {
    source: 'Tshirts/4.avif'
  },
  {
    source: 'Tshirts/5.avif'
  },
  {
    source: 'Tshirts/6.avif'
  },
  {
    source: 'Tshirts/7.avif'
  },
  {
    source: 'Tshirts/8.avif'
  },
  {
    source: 'Tshirts/9.avif'
  }
]
</script>
