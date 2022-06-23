let pokemonRepository = (function () {
 let pokemonList = [
  {name: `Venusaur`, height: `2.0`, type: [`grass`, `poison`]},
  {name: `Squirtle`, height: `0.4`, type: `water`},
  {name: `Charmander`, height: `0.6`, type: `fire`}
];



 function getAll() {
  return pokemonList;
}

 function add (pokemon) {
            PokemonList.push(pokemon);
        }


 return {
   getAll: getAll,
   add: add,
 };

})();


console.log(pokemonRepository.getAll())

pokemonRepository.getAll().forEach(function(property) {
  document.write(property.name+ '<br>' +property.height+ '<br>' +property.type+ '<br>');
});