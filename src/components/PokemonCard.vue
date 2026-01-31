<template>
  <div class="card shadow-sm py-2" style="width: 30rem;" v-if="name">
    <img :src="image" class="card-img-top p-3" :alt="name">
    <div class="card-body">
      <h5 class="card-title text-capitalize text-center">{{ name }} (#{{ id }})</h5>
      <hr>
      <p class="card-text"><strong>Tipos:</strong> {{ formattedTypes }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonCard',
  props: {
    name: String,
    image: String,
    types: Array,
    id: Number,
    cry: String,
  },
  computed: {
    formattedTypes() {
      if (!this.types) return '';
      return this.types.map(t => t.type.name).join(', ');
    }
  },
  mounted() {
      if(this.cry){
        this.$emit('shout', this.cry);
      }
  }
};
</script>
