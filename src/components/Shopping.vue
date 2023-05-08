<template>
  <div class="bg-nord p-4 max-w-sm mx-auto space-y-2 rounded-md">
    <p class="text-2xl">Sua sacola</p>
    <div class="flex flex-col-2 gap-2">
      <div>
        <img
          src="/Tshirts/1.avif"
          alt=""
          class="rounded-md"
        />
      </div>
      <div class="grid content-between">
        <p class="font-semibold text-xs">Produto Lorem</p>
        <p class="text-xs">R$ 19,00</p>
        <p class="text-xs text-center">Quantidade</p>
        <div class="flex justify-between gap-2">
          <button
            class="bg-black text-white px-2.5 text-[18px] rounded-full"
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
            class="bg-black text-white px-2 text-[18px] rounded-full"
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
