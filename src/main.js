import { interaccionPokemonLista } from "./ui/pokemonLista.js";
import { pedirDetallesPokemon } from "./api/pokemonApi.js";
import { verificarPokemonStoragePorBusqueda } from "./storage/pokemonCache.js";
import { verificarPokemonStoragePorLista } from "./storage/pokemonCache.js";

$(document).ready(function () {
  $("#mostrar-boton-lista").click(interaccionPokemonLista);

  $(document).on("click", ".pokemon-item", function () {
    const pokemonName = $(this).text();
    verificarPokemonStoragePorLista(pokemonName);
    pedirDetallesPokemon(pokemonName);
  });

  $("#boton-buscar").click(function () {
    const pokemonBusqueda = $("#pokemon-id").val().toLowerCase().trim();
    verificarPokemonStoragePorBusqueda(pokemonBusqueda);
    if (pokemonBusqueda) {
      pedirDetallesPokemon(pokemonBusqueda);
    } else {
      alert("Por favor, ingresa un nombre o número de Pokémon.");
    }
  });
});
