<template>
  <div class="flex flex-col-reverse md:flex-row h-full max-w-2xl mx-auto gap-8 py-8 text-sm w-full">
    <div>
      <form @submit.prevent="submitForm" class="flex flex-col space-y-8">
        <h1 class="text-xl">Finalizacao do pedido</h1>
        <p>Informacoes de contato</p>
        <div class="flex flex-col">
          <label>Email</label>
          <input v-model="formData.email" type="email" class="border-2 border-black" />
          <div v-if="formErrors.email">{{ formErrors.email }}</div>
        </div>
        <div class="flex flex-col">
          <label>Telefone</label>
          <input v-model="formData.phone" type="number" class="border-2 border-black" />
          <div v-if="formErrors.phone">{{ formErrors.phone }}</div>
        </div>
        <Cep />
        <div class="space-y-4 my-8">
          <p>Informacoes de pagamento</p>
          <div class="flex flex-col">
            <label for="">Numero do cartao</label>
            <input v-model="formData.numberCard" type="number" class="border-2 border-black" />
            <div v-if="formErrors.numberCard">{{ formErrors.numberCard }}</div>
          </div>
          <div class="flex flex-col">
            <label for="">Titular do cartao</label>
            <input v-model="formData.titleCard" type="text" class="border-2 border-black" />
            <div v-if="formErrors.titleCard">{{ formErrors.titleCard }}</div>
          </div>
          <div class="flex gap-4">
            <div class="flex flex-col">
              <label for="">Data de vencimento</label>
              <input v-model="formData.dateCard" type="number" class="border-2 border-black" />
              <div v-if="formErrors.dateCard">{{ formErrors.dateCard }}</div>
            </div>
            <div class="flex flex-col">
              <label for="">CVC</label>
              <input v-model="formData.cvc" type="number" class="border-2 border-black" />
              <div v-if="formErrors.cvc">{{ formErrors.cvc }}</div>
            </div>
          </div>
        </div>
        <div class="flex justify-end">
          <button type="submit" class="bg-gray-900 text-white p-2">Fechar&nbsp;pedido</button>
        </div>
        <p v-if="message">{{ message }}</p>
      </form>
    </div>
    <div>
      <Shopping />
    </div>
  </div>
</template>

<script>
import { z } from 'zod'
import Cep from './Cep.vue'
import Shopping from './Shopping.vue'

export default {
  name: 'FormShopping',
  data() {
    return {
      formData: {
        email: '',
        phone: '',
        numberCard: '',
        titleCard: '',
        dateCard: '',
        cvc: ''
      },
      formSchema: z.object({
        email: z.string().nonempty('Email is required.').email('Invalid email format.'),
        phone: z.number().lte(1, { message: 'this👏is👏too👏big' }),
        numberCard: z.number().lte(1, { message: 'this👏is👏too👏big' }),
        titleCard: z
          .string()
          .nonempty('Titulo is required.')
          .min(1, 'Titulo must be at least 11 characters.'),
        dateCard: z.number().lte(1, { message: 'this👏is👏too👏big' }),
        cvc: z.number().lte(1, { message: 'this👏is👏too👏big' })
      }),
      formErrors: {}
    }
  },
  methods: {
    validateForm() {
      try {
        this.formSchema.parse(this.formData)
        this.formErrors = {}
        return true
      } catch (error) {
        if (error.formErrors) {
          this.formErrors = error.formErrors.fieldErrors
        }
        return false
      }
    },
    submitForm() {
      if (this.validateForm()) {
        this.message = 'Enviado com successo'
        const jsonData = JSON.stringify(this.formData)
        console.log(jsonData) // exibir o JSON no console
      }
    }
  },
  components: { Cep, Shopping }
}
</script>
