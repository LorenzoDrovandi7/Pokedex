import { actualizarDetallesPokemon } from "../ui/DetallesPokemon.js";

export async function verificarPokemonStoragePorBusqueda(pokemonBusqueda) {
  if (pokemonBusqueda) {
    const pokemonGuardado = localStorage.getItem(pokemonBusqueda);
    if (pokemonGuardado) {
      actualizarDetallesPokemon(JSON.parse(pokemonGuardado));
    } else {
      $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemonBusqueda}`,
        method: "GET",
        success: function (pokemonData) {
          localStorage.setItem(pokemonBusqueda, JSON.stringify(pokemonData));
          actualizarDetallesPokemon(pokemonData);
        },
        error: function () {
          alert("No se encontró ningún Pokémon con ese nombre o número.");
        },
      });
    }
  } else {
    alert("Por favor, ingresa un nombre o número de Pokémon.");
  }
}

export async function verificarPokemonStoragePorLista(pokemonName) {
  const pokemonGuardado = localStorage.getItem(pokemonName);
  if (pokemonGuardado) {
    actualizarDetallesPokemon(JSON.parse(pokemonGuardado));
  } else {
    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
      method: "GET",
      success: function (pokemonData) {
        localStorage.setItem(pokemonName, JSON.stringify(pokemonData));
        actualizarDetallesPokemon(pokemonData);
      },
      error: function () {
        alert("Error al obtener los datos del Pokémon.");
      },
    });
  }
}
