<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name">Name:</label>
      <input id="name" type="text" v-model="formData.name" />
      <p v-if="rules.name.$error" class="error">{{ rules.name.$message }}</p>
    </div>

    <div>
      <label for="email">Email:</label>
      <input id="email" type="text" v-model="formData.email" />
      <p v-if="rules.email.$error" class="error">{{ rules.email.$message }}</p>
    </div>

    <div>
      <label for="age">Age:</label>
      <input id="age" type="number" v-model.number="formData.age" />
      <p v-if="rules.age.$error" class="error">{{ rules.age.$message }}</p>
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { z } from 'zod'

const validationSchema = z.object({
  name: z.string().nonempty('Name is required'),
  email: z.string().email('Invalid email address'),
  age: z.number().min(18, 'You must be at least 18 years old')
})
export default {
  setup() {
    const formData = ref({
      name: '',
      email: '',
      age: null
    })

    const rules = useVuelidate(validationSchema, formData)

    const handleSubmit = () => {
      if (!rules.value.$invalid) {
        // Handle form submission
        console.log(formData.value)
      }
    }

    return {
      formData,
      rules,
      handleSubmit
    }
  }
}
</script>
