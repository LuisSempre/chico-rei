<template>
  <div class="max-w-7xl mx-auto p-8 justify-center items-center h-full">
    <h1 class="text-center py-8 font-bold text-xl">Camisetas</h1>
    <ul role="list" class="grid grid-cols-2 gap-8 lg:grid-cols-3">
      <li v-for="file in files" :key="file.source" class="relative">
        <div class="flex flex-col lg:flex-row gap-4">
          <div>
            <img :src="file.source" alt="" class="w-62 rounded-md"/>
          </div>
          <div class="text-xs md:text-md lg:max-w-1/8 max-w-1/4 mx-auto lg:content-between space-y-4 grid">
            <p class="font-semibold">
              {{ file.title }}
            </p>
            <p>
              {{ file.description }}
            </p>
            <p class="font-semibold">
              {{ file.price }}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const files = [
  {
    title: 'Camiseta Maria Maria',
    price: 'R$ 19,90',
    description:
      'Malha 88% algodão e 12% poliéster. O algodão é trazido de plantações do nordeste brasileiro, tingidos e tecidos no sul do país, e produzidos artesanalmente em Minas Gerais. Produção 100% consciente, com certificado de algodão sustentável.',

    source: 'Tshirts/1.avif'
  },
  {
    title: 'Camiseta Paciência',
    price: 'R$ 19,90',
    description:
      'Malha 88% algodão e 12% poliéster. O algodão é trazido de plantações do nordeste brasileiro, tingidos e tecidos no sul do país, e produzidos artesanalmente em Minas Gerais. Produção 100% consciente, com certificado de algodão sustentável.',
    source: 'Tshirts/2.avif'
  },
  {
    title: 'Camiseta Black Heart',
    price: 'R$ 19,90',
    description:
      'Camiseta com 100% de fibra natural de algodão sustentável. A Coleção Minimalista da Chico Rei vem do exercício de expressão através do que é elementar. São estampas que fogem do nosso padrão, desafiando a forma da camiseta.',

    source: 'Tshirts/3.avif'
  },
  {
    title: 'Camiseta bolso gaivota',
    price: 'R$ 19,90',
    description:
      'Malha 88% algodão e 12% poliéster. O algodão é trazido de plantações do nordeste brasileiro, tingidos e tecidos no sul do país, e produzidos artesanalmente em Minas Gerais. Produção 100% consciente, com certificado de algodão sustentável.',
    source: 'Tshirts/4.avif'
  },
  {
    title: 'Camiseta La Belle De Jour',
    price: 'R$ 19,90',
    description:
      'Malha 88% algodão e 12% poliéster. O algodão é trazido de plantações do nordeste brasileiro, tingidos e tecidos no sul do país, e produzidos artesanalmente em Minas Gerais. Produção 100% consciente, com certificado de algodão sustentável.',

    source: 'Tshirts/5.avif'
  },
  {
    title: 'Camiseta Metade de mim e amor',
    price: 'R$ 19,90',
    description:
      'Malha 88% algodão e 12% poliéster. O algodão é trazido de plantações do nordeste brasileiro, tingidos e tecidos no sul do país, e produzidos artesanalmente em Minas Gerais. Produção 100% consciente, com certificado de algodão sustentável.',

    source: 'Tshirts/6.avif'
  },
  {
    title: 'Camiseta básica preto noir',
    price: 'R$ 19,90',
    description:
      'Malha 88% algodão e 12% poliéster. O algodão é trazido de plantações do nordeste brasileiro, tingidos e tecidos no sul do país, e produzidos artesanalmente em Minas Gerais. Produção 100% consciente, com certificado de algodão sustentável.',

    source: 'Tshirts/7.avif'
  },
  {
    title: 'Camiseta algodão pima básica branca',
    price: 'R$ 19,90',
    description:
      'Malha 100% de algodão Pima peruano. Considerado um dos melhores algodões do mundo, o Pima peruano é produzido com as fibras mais finas e mais longas que existem, destacando-se pela suavidade e resistência. Mais qualidade e conforto.',
    source: 'Tshirts/8.avif'
  },
  {
    title: 'Camiseta Je Re Regrette Rien',
    price: 'R$ 19,90',
    description:
      'Malha 88% algodão e 12% poliéster. O algodão é trazido de plantações do nordeste brasileiro, tingidos e tecidos no sul do país, e produzidos artesanalmente em Minas Gerais. Produção 100% consciente, com certificado de algodão sustentável.',
    source: 'Tshirts/9.avif'
  }
]
</script>
