<template>
  <div class="max-w-6xl mx-auto p-8">
    <h1 class="text-center py-8 font-bold text-xl">Camisetas</h1>
    <ul role="list" class="grid grid-cols-2 gap-8 md:grid-cols-3">
      <li v-for="file in files" :key="file.source" class="relative">
        <div class="flex flex-col md:flex-row gap-4">
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
    title: "Produto Lorem",
    price: "R$ 19,90",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    source:
      "https://chicorei.imgix.net/4178/b2026922-1748-11ed-b5c6-2b4175e2bfd0.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    title: "Produto Lorem",
    price: "R$ 19,90",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    source:
      "https://chicorei.imgix.net/4178/b2026922-1748-11ed-b5c6-2b4175e2bfd0.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    title: "Produto Lorem",
    price: "R$ 19,90",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    source:
      "https://chicorei.imgix.net/4178/b2026922-1748-11ed-b5c6-2b4175e2bfd0.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    title: "Produto Lorem",
    price: "R$ 19,90",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    source:
      "https://chicorei.imgix.net/4178/b2026922-1748-11ed-b5c6-2b4175e2bfd0.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    title: "Produto Lorem",
    price: "R$ 19,90",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    source:
      "https://chicorei.imgix.net/4178/b2026922-1748-11ed-b5c6-2b4175e2bfd0.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    title: "Produto Lorem",
    price: "R$ 19,90",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    source:
      "https://chicorei.imgix.net/4178/b2026922-1748-11ed-b5c6-2b4175e2bfd0.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    title: "Produto Lorem",
    price: "R$ 19,90",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    source:
      "https://chicorei.imgix.net/4178/b2026922-1748-11ed-b5c6-2b4175e2bfd0.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    title: "Produto Lorem",
    price: "R$ 19,90",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    source:
      "https://chicorei.imgix.net/4178/b2026922-1748-11ed-b5c6-2b4175e2bfd0.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
  {
    title: "Produto Lorem",
    price: "R$ 19,90",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    source:
      "https://chicorei.imgix.net/4178/b2026922-1748-11ed-b5c6-2b4175e2bfd0.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top",
  },
];
</script>
