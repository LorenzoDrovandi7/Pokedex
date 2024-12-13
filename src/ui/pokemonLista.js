import { pedirListaPokemon } from "../api/pokemonApi.js";

function generarLista(pokemons) {
  pokemons.forEach(function (pokemon) {
    $("#pokemon-list").append(`<li class="pokemon-item">${pokemon.name}</li>`);
  });
}

export async function interaccionPokemonLista() {
  const $pokemonLista = $("#pokemon-list-container");
  $pokemonLista.toggle();
  if ($pokemonLista.is(":visible")) {
    $("#mostrar-boton-lista").text("Ocultar lista");
  } else {
    $("#mostrar-boton-lista").text("Mostrar lista");
  }

  if ($pokemonLista.find("li").length === 0) {
    const pokemons = await pedirListaPokemon();
    generarLista(pokemons);
  }
}
