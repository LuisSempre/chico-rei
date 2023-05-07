<template>
  <div class="flex flex-col md:flex-row h-full max-w-2xl mx-auto gap-8 py-8 text-sm w-full h-screen">
    <div>
      <form class="flex justify-center flex-col" @submit.prevent="submitForm">
        <h1 class="text-xl">Finalizacao do pedido</h1>
        <div class="space-y-4 my-8">
          <p>Informacoes de contato</p>
          <div class="flex flex-col">
            <label for="email">E-mail</label>
            <input type="email" class="border-2 border-black" v-model="email" name="email" />
            <span>{{ errors.email }}</span>
          </div>
          <div class="flex flex-col">
            <label for="">Telefone</label>
            <input type="number" class="border-2 border-black" />
          </div>
        </div>
        <!-- <Cep /> -->
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
        <button class="bg-gray-900 text-white p-2" type="submit">Fechar pedido</button>
        <span>{{ errors.send }}</span>
      </form>
      <div class="flex justify-end"></div>
    </div>
    <!-- <Shopping /> -->
  </div>
</template>
<script>
import Cep from './Cep.vue'
import Shopping from './Shopping.vue'

import { ref } from 'vue'
import { z } from 'zod'

const schema = z.object({
  email: z.string().nonempty('Email is required.').email('Invalid email format.')
})

export default {
  setup() {
    const email = ref('')
    const errors = ref({})

    const submitForm = () => {
      const validationResult = schema.safeParse({ email: email.value })
      if (validationResult.success) {
        // Form is valid, submit the data
        console.log('Form submitted!')
      } else {
        // Form is not valid, handle the errors
        errors.value = validationResult.error.flatten()
        console.log('Form validation failed!')
      }
    }

    return {
      email,
      errors,
      submitForm
    }
  }
}
</script>
