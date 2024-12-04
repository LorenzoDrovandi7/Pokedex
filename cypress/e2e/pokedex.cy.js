describe("Pokédex App", () => {
  const botonLista = () => cy.get("#mostrar-boton-lista");
  const pokemonNombre = () => cy.get("#pokemon-nombre");
  const pokemonImagen = () => cy.get("#pokemon-imagen");

  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/pokedexApi/index.html");
  });

  it("Debe cargar la página correctamente", () => {
    cy.get("h1").should("have.text", "Pokédex");
    cy.get("#boton-buscar").should("be.visible");
    cy.get("#pokemon-list-container").should("not.be.visible");
  });

  it("Debe mostrar y ocultar la lista de Pokémon", () => {
    botonLista().click();
    cy.get("#pokemon-list-container").should("be.visible");
    botonLista().should("have.text", "Ocultar lista");
    botonLista().click();
    cy.get("#pokemon-list-container").should("not.be.visible");
    botonLista().should("have.text", "Mostrar lista");
  });

  it("Debe buscar un Pokémon por nombre o ID y mostrar sus detalles", () => {
    cy.get("#pokemon-id").type("pikachu");
    cy.get("#boton-buscar").click();
    pokemonNombre().should("have.text", "pikachu");
    cy.get("#pokemon-tipo").should("exist");
    cy.get("#pokemon-altura").should("exist");
    cy.get("#pokemon-peso").should("exist");
    pokemonImagen().should("have.attr", "src").should("include", "25");
  });

  it("Debe cargar los detalles de un Pokémon al hacer clic en la lista", () => {
    botonLista().click();
    cy.get("#pokemon-list li").contains("bulbasaur").click();
    pokemonNombre().should("have.text", "bulbasaur");
    pokemonImagen().should("have.attr", "src").should("include", "1");
    cy.get("#pokemon-tipo").should("exist");
    cy.get("#pokemon-altura").should("exist");
    cy.get("#pokemon-peso").should("exist");
  });

  it("Debe cargar la lista de Pokémon", () => {
    cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon?limit=151").as(
      "getPokemons"
    );
    botonLista().click();
    cy.wait("@getPokemons").its("response.statusCode").should("eq", 200);
    cy.get("li.pokemon-item").should("have.length", 151);
  });

  it("Debe mostrar la información del Pokémon al hacer clic en su nombre", () => {
    cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon/*").as(
      "getPokemonDetails"
    );
    botonLista().click();
    cy.get("li.pokemon-item").first().click();
    cy.wait("@getPokemonDetails").its("response.statusCode").should("eq", 200);
    pokemonNombre().should("not.be.empty");
    pokemonImagen().should("be.visible");
  });

  it("Debe buscar un Pokémon por nombre o número", () => {
    cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon/pikachu").as(
      "searchPikachu"
    );
    cy.get("#pokemon-id").type("pikachu");
    cy.get("#boton-buscar").click();
    cy.wait("@searchPikachu").its("response.statusCode").should("eq", 200);
    pokemonNombre().should("contain", "pikachu");
  });
});
