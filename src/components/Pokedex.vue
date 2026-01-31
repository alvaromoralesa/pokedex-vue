<template>
  <div class="pokedex">
    <!-- Parte superior -->
    <div class="pokedex-header">
      <div class="luz-grande"></div>
      <div class="luces-pequenas">
        <span class="luz roja"></span>
        <span class="luz amarilla"></span>
        <span class="luz verde"></span>
      </div>
    </div>

    <!-- Pantalla -->
    <div class="pantalla">
      <SearchBar @search="handleSearch" />
      <div id="resultado" class="d-flex justify-content-center">
        <div v-if="loading" class="text-center">
          <div class="spinner-border text-danger" role="status"></div>
          <p class="mt-2">Buscando Pokémon...</p>
        </div>
        <div v-else-if="error" class="alert alert-danger text-center">
          {{ error }}
        </div>
        <PokemonCard
          v-else-if="pokemon"
          :name="pokemon.nombre"
          :image="pokemon.imagen"
          :types="pokemon.types"
          :id="pokemon.id"
          :cry="pokemon.cry"
          @shout="playSound"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import PokemonCard from "./PokemonCard.vue";
import { getPokemon } from "../services/api.js";

export default {
  name: "PokedexBase",
  components: {
    SearchBar,
    PokemonCard,
  },
  data() {
    return {
      pokemon: null,
      loading: false,
      error: null,
    };
  },
  methods: {
    //
    async handleSearch(searchTerm) {
      this.loading = true;
      this.error = null;
      this.pokemon = null;
      try {
        this.pokemon = await getPokemon(searchTerm);
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    playSound(sound) {
      const audio = new Audio(sound);
      audio.play();
    },
  },
};
</script>
