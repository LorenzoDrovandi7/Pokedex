import { actualizarDetallesPokemon } from "./DetallesPokemon.js";

export function fetchPokemonLista() {
  $.ajax({
    url: "https://pokeapi.co/api/v2/pokemon?limit=151",
    method: "GET",
    success: function (response) {
      const pokemons = response.results;
      pokemons.forEach(function (pokemon) {
        $("#pokemon-list").append(
          `<li class="pokemon-item">${pokemon.name}</li>`
        );
      });
    },
    error: function () {
      $("#pokemon-list").html("<p>Error al cargar la lista de Pokémon.</p>");
    },
  });
}

export function fetchPokemonDetalles(pokemonName) {
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`,
    method: "GET",
    success: function (pokemonData) {
      actualizarDetallesPokemon(pokemonData);
    },
    error: function () {
      alert("Error al obtener los datos del Pokémon.");
    },
  });
}
