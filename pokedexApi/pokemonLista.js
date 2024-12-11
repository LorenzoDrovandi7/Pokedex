import { fetchPokemonLista } from "./pokemonApi.js";

export function interaccionPokemonLista() {
  const $pokemonLista = $("#pokemon-list-container");
  $pokemonLista.toggle();
  if ($pokemonLista.is(":visible")) {
    $("#mostrar-boton-lista").text("Ocultar lista");
  } else {
    $("#mostrar-boton-lista").text("Mostrar lista");
  }
  if ($pokemonLista.find("li").length === 0) {
    fetchPokemonLista();
  }
}
