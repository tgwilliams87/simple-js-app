let pokemonList = [
  {name: `Venusaur`, height: `2.0`, types: [`grass`, `poison`]},
  {name: `Squirtle`, height: `0.4`, type: `water`},
  {name: `Charmander`, height: `0.6`, type: `fire`}
];

for (let i=0; i<pokemonList.length; i++){
    document.write(pokemonList[i].name +' '+'height is '+ pokemonList[i].height +' cm')

    if(pokemonList[i].height >= 1.6){
        document.write('  Size Large "Wow, thats\'s big!"' + '<br>')
    } else if(pokemonList[i].height >=0.5 && pokemonList[i].height <=1.0){
        document.write('  Size Medium' +'<br>')
    } else {
        document.write('  Size Small' +'<br>') 
    }
}