import { fetchPokemonList } from "./pokemonApi.js";

export function togglePokemonList() {
  const $pokemonList = $("#pokemon-list-container");
  $pokemonList.toggle();
  if ($pokemonList.is(":visible")) {
    $("#mostrar-boton-lista").text("Ocultar lista");
  } else {
    $("#mostrar-boton-lista").text("Mostrar lista");
  }
  if ($pokemonList.find("li").length === 0) {
    fetchPokemonList();
  }
}
