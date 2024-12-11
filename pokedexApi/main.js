import { interaccionPokemonLista } from "./pokemonLista.js";
import { fetchPokemonDetalles } from "./pokemonApi.js";

$(document).ready(function () {
  $("#mostrar-boton-lista").click(interaccionPokemonLista);

  $(document).on("click", ".pokemon-item", function () {
    const pokemonName = $(this).text();
    fetchPokemonDetalles(pokemonName);
  });

  $("#boton-buscar").click(function () {
    const pokemonBusqueda = $("#pokemon-id").val().toLowerCase().trim();
    if (pokemonBusqueda) {
      fetchPokemonDetalles(pokemonBusqueda);
    } else {
      alert("Por favor, ingresa un nombre o número de Pokémon.");
    }
  });
});
