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
    source: 'Shirts/1.avif'
  },
  {
    source: 'Shirts/2.avif'
  },
  {
    source: 'Shirts/3.avif'
  },
  {
    source: 'Shirts/4.avif'
  },
  {
    source: 'Shirts/5.avif'
  },
  {
    source: 'Shirts/6.avif'
  },
  {
    source: 'Shirts/7.avif'
  },
  {
    source: 'Shirts/8.avif'
  },
  {
    source: 'Shirts/9.avif'
  }
]
</script>
