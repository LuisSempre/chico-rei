<template>
  <div class="max-w-6xl mx-auto p-8 justify-center items-center h-full">
    <ul role="list" class="grid grid-cols-2 gap-8 md:grid-cols-3">
      <li v-for="file in files" :key="file.source" class="relative">
        <div class="flex flex-col lg:flex-row gap-4">
          <div>
            <img :src="file.source" alt="" class="w-62" />
          </div>
          <div class="text-[10px] space-y-4">
            <p class="font-semibold">
              {{ file.title }}
            </p>
            <p>
              {{ file.description }}
            </p>
            <p class="font-semibold">
              {{ file.price }}
            </p>
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
      "https://chicorei.imgix.net/12626/2a6803a8-b964-11eb-9133-73b6c3a5d4b7.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    source:
      "https://chicorei.imgix.net/12626/2a6803a8-b964-11eb-9133-73b6c3a5d4b7.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    source:
      "https://chicorei.imgix.net/12626/2a6803a8-b964-11eb-9133-73b6c3a5d4b7.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    source:
      "https://chicorei.imgix.net/12626/2a6803a8-b964-11eb-9133-73b6c3a5d4b7.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    source:
      "https://chicorei.imgix.net/12626/2a6803a8-b964-11eb-9133-73b6c3a5d4b7.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    source:
      "https://chicorei.imgix.net/12626/2a6803a8-b964-11eb-9133-73b6c3a5d4b7.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    source:
      "https://chicorei.imgix.net/12626/2a6803a8-b964-11eb-9133-73b6c3a5d4b7.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    source:
      "https://chicorei.imgix.net/12626/2a6803a8-b964-11eb-9133-73b6c3a5d4b7.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    source:
      "https://chicorei.imgix.net/12626/2a6803a8-b964-11eb-9133-73b6c3a5d4b7.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
];
</script>
