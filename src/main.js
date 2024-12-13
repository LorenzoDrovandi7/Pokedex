import { interaccionPokemonLista } from "./ui/pokemonLista.js";
import { pedirDetallesPokemon } from "./api/pokemonApi.js";

$(document).ready(function () {
  $("#mostrar-boton-lista").click(interaccionPokemonLista);

  $(document).on("click", ".pokemon-item", function () {
    const pokemonName = $(this).text();
    pedirDetallesPokemon(pokemonName);
  });

  $("#boton-buscar").click(function () {
    const pokemonBusqueda = $("#pokemon-id").val().toLowerCase().trim();
    if (pokemonBusqueda) {
      pedirDetallesPokemon(pokemonBusqueda);
    } else {
      alert("Por favor, ingresa un nombre o número de Pokémon.");
    }
  });
});
