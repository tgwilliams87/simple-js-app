let pokemonRepository = (function () {
 let repository = [
  {name: "Venusaur", height: 2.0, type: ["grass", "poison"],},
  {name: "Squirtle", height: 0.4, type: ["water"],},
  {name: "Charmander", height: 0.6, type: ["fire"],},
];


 function add (pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "type" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not valid");
    }
  }
  function getAll() {
   return repository;
}
  function addListItem(pokemon){
    let pokemonList = document.querySelector (".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    eventListener(button,pokemon);
  }

  function eventListener (button, pokemon){
    button.addEventListener("click", function(){
      showDetails(pokemon);  
    });
  }

  function showDetails(pokemon){
    console.log(pokemon)
  }

 return {
   add: add,
   getAll: getAll,
   addListItem: addListItem,
   showDetails: showDetails,
 };

})();


pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
  
});