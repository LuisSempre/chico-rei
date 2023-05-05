<template>
  <div
    class="flex flex-row h-full max-w-2xl mx-auto justify-center gap-8 py-8 text-sm w-full"
  >
    <div>
      <form>
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
          <div class="flex gap-2">
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
      <button class="bg-gray-900 text-white p-2">Fechar pedido</button>
    </div>
 <Shopping />
  </div>
</template>
<script setup>
import Cep from "./Cep.vue";
import Shopping from "./Shopping.vue";
</script>
