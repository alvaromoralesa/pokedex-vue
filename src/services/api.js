// ============================================
// API.JS - LÓGICA DE CONSUMO DE API (POKÉDEX)
// Rol: Ingeniero de datos
// ============================================

import { Pokemon } from "./Pokemon.js";

// ============================================
//🌐 api.js — Ingeniero de Datos
//“El archivo api.js se encarga exclusivamente
// de la comunicación con la PokeAPI, implementando
// la lógica de consumo del servicio mediante fetch,
// manejo de asincronía con async/await y control
// de errores cuando el Pokémon no existe.”
// ============================================

// ============================================

const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

/**
 * Busca un Pokémon por nombre o ID y devuelve una instancia de la clase Pokemon.
 * @param {string} identifier El nombre o ID del Pokémon.
 * @returns {Promise<Pokemon>} Una instancia de la clase Pokemon.
 */
export async function getPokemon(identifier) {
  const response = await fetch(`${API_BASE_URL}${identifier.toLowerCase()}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(
        `No se encontró el Pokémon "${identifier}". Intenta con otro.`,
      );
    }
    throw new Error("Ocurrió un error inesperado en la búsqueda.");
  }

  const data = await response.json();
  return new Pokemon(data);
}
