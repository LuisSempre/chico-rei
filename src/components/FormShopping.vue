<template>
  <div class="flex flex-col-reverse md:flex-row h-full max-w-2xl mx-auto gap-8 py-8 text-sm w-full">
    <div class="flex flex-col justify-center items-center">
      <form @submit.prevent="submitForm" class="flex flex-col space-y-8">
        <h1 class="text-xl font-semibold">Finalização do pedido</h1>
        <p class="font-semibold">Informações  de contato</p>
        <div class="flex flex-col">
          <label>E-mail</label>
          <input v-model="formData.email" type="email" class="border-2 border-black" />
          <div class="text-alert" v-if="formErrors.email">{{ formErrors.email }}</div>
        </div>
        <div class="flex flex-col">
          <label>Telefone</label>
          <input v-model="formData.phone" type="number" class="border-2 border-black" />
          <div class="text-alert" v-if="formErrors.phone">{{ formErrors.phone }}</div>
        </div>
        <div>
          <Cep/>
          <div class="text-alert" v-if="formErrors.phone">{{ formErrors.phone }}</div>
        </div>
        <div class="space-y-4 my-8">
          <p class="font-semibold">Informações de pagamento</p>
          <div class="flex flex-col">
            <label for="">Número do cartão</label>
            <input v-model="formData.numberCard" type="number" class="border-2 border-black" />
            <div class="text-alert" v-if="formErrors.numberCard">{{ formErrors.numberCard }}</div>
          </div>
          <div class="flex flex-col">
            <label for="">Titular do cartão</label>
            <input v-model="formData.titleCard" type="text" class="border-2 border-black" />
            <div class="text-alert" v-if="formErrors.titleCard">{{ formErrors.titleCard }}</div>
          </div>
          <div class="flex gap-4">
            <div class="flex flex-col">
              <label for="">Data de vencimento</label>
              <input v-model="formData.dateCard" type="number" class="border-2 border-black" />
              <div class="text-alert" v-if="formErrors.dateCard">{{ formErrors.dateCard }}</div>
            </div>
            <div class="flex flex-col">
              <label for="">CVC</label>
              <input v-model="formData.cvc" type="number" class="border-2 border-black" />
              <div class="text-alert" v-if="formErrors.cvc">{{ formErrors.cvc }}</div>
            </div>
          </div>
        </div>
        <div class="flex justify-end">
          <button type="submit" class="bg-black text-white p-2 rounded-md font-bold">Fechar&nbsp;pedido</button>
        </div>
        <p v-if="message" class="bg-success text-white text-center p-2 rounded-md font-bold">{{ message }}</p>
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
        email: z.string().nonempty('Obrigatório.').email('E-mail inválido'),
        phone: z
          .number({
            required_error: 'Obrigatório.',
            invalid_type_error: 'Obrigatório.'
          })
          .gte(11),
        numberCard: z
          .number({
            required_error: 'Obrigatório.',
            invalid_type_error: 'Obrigatório.'
          })
          .gte(11),
        titleCard: z.string().nonempty('Obrigatório.').min(4),
        dateCard: z
          .number({
            required_error: 'Obrigatório.',
            invalid_type_error: 'Obrigatório.'
          }),
        cvc: z
          .number({
            required_error: 'Obrigatório.',
            invalid_type_error: 'Obrigatório.'
          })
          .gte(3)
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
        console.log(jsonData)
      }
    }
  },
  components: { Cep, Shopping }
}
</script>
