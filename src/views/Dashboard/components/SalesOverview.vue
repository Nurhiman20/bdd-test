<template>
  <div>
    <v-card 
      outlined
      class="pa-3"
    >
      <div class="card-subtitle d-flex flex-row align-center">
        <p class="mr-1"><v-icon class="">{{ title.icon }}</v-icon></p>
        <p class="mr-1">{{ title.title }}</p>
        <p :class="title.color">0 {{ title.unit }}</p>
      </div>
      <h2 class="text-bold ml-2 mt-n3">Rp. {{ dataSales }}</h2>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['title', 'dataSales']
}
</script>
