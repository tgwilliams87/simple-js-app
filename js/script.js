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
  if (typeof pokemon === 'object' && 'name' in pokemon &&
            "height" in pokemon &&
            "type" in pokemon) {
            PokemonList.push(pokemon);
        } else {
            console.log(`Pokemon is not valid!`);
        }
};

 return {
   getAll: getAll,
   add: add,
 };

})();

let pokemonList = pokemonRepository.getAll();

