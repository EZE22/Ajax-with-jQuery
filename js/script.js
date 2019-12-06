$(function () {

  //***Retrieving Pokemon Data from the PokeAPI***
  let pokeapiUrl = "https://pokeapi.co/api/v2/generation/1";
  let pokeapiByNameUrl = "https://pokeapi.co/api/v2/pokemon/";

  $.getJSON(pokeapiUrl).done(function(data) {
    console.log(data);  // Explore available data in the Developer Tools Console
    $.each(data.pokemon_species, function(index, pokemon) {
      let name = capitalize(pokemon.name);
      let link = $("<a>").attr("id", pokemon.name).attr("href", "#").append($("<strong>").text(name));
      let paragraph = $("<p>").html("Pokémon species no. " + (index+1) + " is ").append(link);

      link.click(function (event) {
        $.getJSON(pokeapiByNameUrl + pokemon.name).done(function (details) {
          console.log(details);
          let pokemonDiv = $("#pokemon-details");
          pokemonDiv.empty();
          pokemonDiv.append("<h2>" + name + "</h2>");
          pokemonDiv.append("<img src='" + details.sprites.front_default + "'>");
          pokemonDiv.append("<img src='" + details.sprites.back_default + "'>");
          pokemonDiv.append("<img src='" + details.sprites.front_shiny + "'>");
          pokemonDiv.append("<img src='" + details.sprites.back_shiny + "'>");
        });
        event.preventDefault();
      });

      paragraph.appendTo("#pokedex");
    });
  }).fail(function() {
    // Handle error case
    console.log("Call to PokéAPI failed.");
  }).always(function() {
    // Will always be executed (in either case).
    console.log("Pokémon is awesome.")
  });

});

// Capitalizes a given string.
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
