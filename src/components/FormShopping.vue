<template>
  <form @submit.prevent="submitForm">
    <div>
      <label>Name:</label>
      <input v-model="formData.name" type="text" />
      <div v-if="formErrors.name">{{ formErrors.name }}</div>
    </div>
    <div>
      <label>Email:</label>
      <input v-model="formData.email" type="email" />
      <div v-if="formErrors.email">{{ formErrors.email }}</div>
    </div>
    <div>
      <label>Password:</label>
      <input v-model="formData.password" type="password" />
      <div v-if="formErrors.password">{{ formErrors.password }}</div>
    </div>
    <button type="submit">Submit</button>
    <div v-if="message">{{ message }}</div>
  </form>
</template>

<script>
import { z } from 'zod'

export default {
  name: 'YourFormComponent',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: ''
      },
      formSchema: z.object({
        name: z
          .string()
          .nonempty('Name is required.')
          .min(3, 'Name must be at least 3 characters.'),
        email: z.string().nonempty('Email is required.').email('Invalid email format.'),
        password: z
          .string()
          .nonempty('Password is required.')
          .min(6, 'Password must be at least 6 characters.')
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
        this.message = 'Success message';
      }
    }
  }
}
</script>
