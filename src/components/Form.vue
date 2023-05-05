<template>
  <div class="flex flex-col md:flex-row h-full max-w-2xl mx-auto gap-8 py-8 text-sm w-full">
    <div>
      <form class="flex justify-center flex-col">
        <h1 class="text-xl">Finalizacao do pedido</h1>
        <div class="space-y-4 my-8">
          <p>Informacoes de contato</p>
          <div class="flex flex-col">
            <label for="">E-mail</label>
            <input type="email" class="border-2 border-black" />
          </div>
          <div class="flex flex-col">
            <label for="">Telefone</label>
            <input type="number" class="border-2 border-black" />
          </div>
        </div>
        <Cep />
        <div class="space-y-4 my-8">
          <p>Informacoes de pagamento</p>
          <div class="flex flex-col">
            <label for="">Numero do cartao</label>
            <input type="number" class="border-2 border-black" />
          </div>
          <div class="flex flex-col">
            <label for="">Titular do cartao</label>
            <input type="number" class="border-2 border-black" />
          </div>
          <div class="flex gap-4">
            <div class="flex flex-col">
              <label for="">Data de vencimento</label>
              <input type="number" class="border-2 border-black" />
            </div>
            <div class="flex flex-col">
              <label for="">CVC</label>
              <input type="number" class="border-2 border-black" />
            </div>
          </div>
        </div>
      </form>
      <div class="flex justify-end">
        <button class="bg-gray-900 text-white p-2">Fechar pedido</button>
      </div>
    </div>
    <Shopping />
  </div>
</template>
<script setup>
import Cep from "./Cep.vue";
import Shopping from "./Shopping.vue";
</script>
