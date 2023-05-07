<template>
  <div class="bg-gray-200 p-4 max-w-xs mx-auto">
    <p class="text-2xl">Sua sacola</p>
    <div class="flex flex-col-2 gap-2">
      <div>
        <img
          src="https://chicorei.imgix.net/4178/b2026922-1748-11ed-b5c6-2b4175e2bfd0.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top"
          alt=""
          class="w-24"
        />
      </div>
      <div class="flex flex-col">
        <p class="font-semibold text-[10px]">Produto Lorem</p>
        <p class="text-[10px]">R$ 19,00</p>
        <p class="text-[8px] text-center">Quantidade</p>
        <div class="flex justify-between gap-2">
          <button
            class="bg-black text-white px-4 text-[20px]"
            @click="decrement"
          >
            -
          </button>
          <input
            class="border border-black px-2 w-10 text-[8px]"
            type="number"
            v-model="count"
          />
          <button
            class="bg-black text-white px-4 text-[20px]"
            @click="increment"
          >
            +
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    },
  },
};
</script>
