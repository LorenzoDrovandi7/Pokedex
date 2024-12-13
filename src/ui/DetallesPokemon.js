export function actualizarDetallesPokemon(pokemonData) {
  $("#pokemon-imagen").attr("src", pokemonData.sprites.front_default);
  $("#pokemon-nombre").text(pokemonData.name);
  const tipos = pokemonData.types.map((tipo) => tipo.type.name).join(", ");
  $("#pokemon-tipo").text(tipos);
  $("#pokemon-altura").text(pokemonData.height / 10 + " m");
  $("#pokemon-peso").text(pokemonData.weight / 10 + " kg");
}
