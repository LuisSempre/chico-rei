
<template>
    <div>
      <select v-model="selectedFruit" id="fruit-select">
        <option value="">--Please select--</option>
        <option v-for="fruit in fruits" :key="fruit.id" :value="fruit.id" v-bind:selected="fruit.id === selectedFruit">{{ fruit.name }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedFruit: '1',
        fruits: [
          { id: '/sweatshirts', name: 'Sweatshirts' },
          { id: '/shirts', name: 'Shirts' },
          { id: '/tshirts', name: 'Sweatshirts' },
        ]
      }
    }
  }
  </script>
  