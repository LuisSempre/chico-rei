<template>
  <form @submit.prevent="submitForm" class="flex mx-auto max-w-6xl flex-col space-y-8">
    <div class="flex flex-col">
      <label>Telefone</label>
      <input v-model="formData.name" type="text" class="border-2 border-black"/>
      <div v-if="formErrors.name">{{ formErrors.name }}</div>
    </div>
    <div class="flex flex-col">
      <label>Email</label>
      <input v-model="formData.email" type="email" class="border-2 border-black"/>
      <div v-if="formErrors.email">{{ formErrors.email }}</div>
    </div>
    <div class="flex justify-end">
      <button type="submit" class="bg-gray-900 text-white p-2">Fechar pedido</button>
      <div v-if="message">{{ message }}</div>
    </div>
  </form>
</template>

<script>
import { z } from 'zod'

export default {
  name: 'FormShopping',
  data() {
    return {
      formData: {
        name: '',
        email: '',
      },
      formSchema: z.object({
        name: z
          .string()
          .nonempty('Name is required.')
          .min(3, 'Name must be at least 3 characters.'),
        email: z.string().nonempty('Email is required.').email('Invalid email format.'),
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
        this.message = 'Success message'
      }
    }
  }
}
</script>
