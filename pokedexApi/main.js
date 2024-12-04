import { togglePokemonList } from "./pokemonList.js";
import { fetchPokemonDetails } from "./pokemonApi.js";

$(document).ready(function () {
  $("#mostrar-boton-lista").click(togglePokemonList);

  $(document).on("click", ".pokemon-item", function () {
    const pokemonName = $(this).text();
    fetchPokemonDetails(pokemonName);
  });

  $("#boton-buscar").click(function () {
    const pokemonBusqueda = $("#pokemon-id").val().toLowerCase().trim();
    if (pokemonBusqueda) {
      fetchPokemonDetails(pokemonBusqueda);
    } else {
      alert("Por favor, ingresa un nombre o número de Pokémon.");
    }
  });
});
