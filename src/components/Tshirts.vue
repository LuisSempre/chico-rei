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
    source:
      "https://chicorei.imgix.net/4178/b2026922-1748-11ed-b5c6-2b4175e2bfd0.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    source:
      "https://chicorei.imgix.net/4178/b2026922-1748-11ed-b5c6-2b4175e2bfd0.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    source:
      "https://chicorei.imgix.net/4178/b2026922-1748-11ed-b5c6-2b4175e2bfd0.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    source:
      "https://chicorei.imgix.net/4178/b2026922-1748-11ed-b5c6-2b4175e2bfd0.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    source:
      "https://chicorei.imgix.net/4178/b2026922-1748-11ed-b5c6-2b4175e2bfd0.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    source:
      "https://chicorei.imgix.net/4178/b2026922-1748-11ed-b5c6-2b4175e2bfd0.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    source:
      "https://chicorei.imgix.net/4178/b2026922-1748-11ed-b5c6-2b4175e2bfd0.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    source:
      "https://chicorei.imgix.net/4178/b2026922-1748-11ed-b5c6-2b4175e2bfd0.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    source:
      "https://chicorei.imgix.net/4178/b2026922-1748-11ed-b5c6-2b4175e2bfd0.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
];
</script>
