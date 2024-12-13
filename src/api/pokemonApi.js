import { actualizarDetallesPokemon } from "../ui/DetallesPokemon.js";

export async function pedirListaPokemon() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error al cargar la lista de los Pokémon:", error);
    $("#pokemon-list").html("<p>Error al cargar la lista de Pokémon.</p>");
    return [];
  }
}

export async function pedirDetallesPokemon(pokemonName) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
    );
    const pokemonData = await response.json();
    actualizarDetallesPokemon(pokemonData);
  } catch (error) {
    console.error("Error al obtener los datos del Pokémon:", error);
    alert("Error al obtener los datos del Pokémon.");
  }
}
