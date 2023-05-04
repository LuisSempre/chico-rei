<template>
  <div class="flex flex-col max-w-6xl mx-auto justify-center items-center">
    <div class="space-y-4">
      <p>Informacoes de entrega</p>
      <div class="flex flex-col">
        <label for="cep">CEP</label>
        <input
          class="border-2 border-black"
          type="text"
          id="cep"
          name="cep"
          v-model="cep"
        />
      </div>
      <div class="flex gap-4">
        <div class="flex flex-col">
          <label for="streetNumber">Numero</label>
          <input
            class="border-2 border-black"
            type="text"
            id="streetNumber"
            name="streetNumber"
            v-model="streetNumber"
          />
        </div>
        <div class="flex flex-col">
          <label for="streetName">Rua</label>
          <input
            class="border-2 border-black"
            type="text"
            id="streetName"
            name="streetName"
            v-model="streetName"
          />
        </div>
      </div>
      <div class="flex gap-4">
        <div class="flex flex-col">
          <label for="city">Cidade</label>
          <input
            class="border-2 border-black"
            type="text"
            id="city"
            name="city"
            v-model="city"
          />
        </div>
        <div class="flex flex-col">
          <label for="state">Estado</label>
          <input
            class="border-2 border-black"
            type="text"
            id="state"
            name="state"
            v-model="state"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cepPromise from "cep-promise";

export default {
  data() {
    return {
      cep: "",
      streetNumber: "",
      streetName: "",
      neighborhood: "",
      city: "",
      state: "",
    };
  },
  methods: {
    fetchAddressInfo() {
      const cep = this.cep.replace(/\D/g, "");
      cepPromise(cep)
        .then((address) => {
          const [streetName, streetNumber] = address.street.split(", ");
          this.streetNumber = streetNumber;
          this.streetName = streetName;
          this.neighborhood = address.neighborhood;
          this.city = address.city;
          this.state = address.state;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  watch: {
    cep(newCep) {
      if (newCep.length === 8) {
        this.fetchAddressInfo();
      }
    },
  },
};
</script>
