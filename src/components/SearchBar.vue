<template>
  <div class="busqueda input-group mb-3">
    <input v-model="searchTerm" @keyup.enter="search" type="text" class="form-control" placeholder="Nombre o ID del Pokémon">
    <button class="btn btn-dark" @click="search">
      Buscar
    </button>
    <div v-if="errorMessage" class="w-100">
        <small class="text-danger">{{ errorMessage }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchTerm: '',
      errorMessage: ''
    };
  },
  methods: {
    search() {
        if(!this.searchTerm.trim()){
            this.errorMessage = 'El campo no puede estar vacío';
            return;
        }
      this.$emit('search', this.searchTerm);
      this.errorMessage = '';
    }
  }
};
</script>
