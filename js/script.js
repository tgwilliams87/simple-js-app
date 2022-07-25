let pokemonRepository = (function () {
 let pokemonList = [];
 let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
 let modalContainer = document.querySelector('.modal');

 function add (pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon    
    )  {
      pokemonList.push(pokemon)
    } else {
      console.log("pokemon is not valid")
    }
  }
  

  function getAll() {
   return pokemonList;
}
  function addListItem(pokemon){
    let pokemonList = document.querySelector (".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }

  function showModal(pokemon) {

    let modalContainer = document.querySelector('#modal-container');
     let pokemonName = pokemon.name
      modalContainer.innerHTML = '';
       let modal = document.createElement("div");
        modalContainer.appendChild(modal);
       let closeButtonElement = document.createElement('button'); 
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);
       let titleElement = document.createElement('h1'); 
        titleElement.innerText = title;
       let contentElement = document.createElement('p');
        contentElement.innerText = text;

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');

       // let modalBody = document.querySelector('.modal-body');
       // modal is showing need to pokemon info into the modal//

       
      //   modalBody.innerHTML = `
      //   Entry: ${pokemon.id}<br>
      //   Height: ${pokemon.height}<br>
      //   Weight: ${pokemon.weight}<br>
      //   Types: ${pokemon.types[0].type.name}`;

      //   modalBody.innerHTML += `<br>
      //   <img src=${pokemon.imageFrontUrl} alt="${pokemon.name} front sprite">
      //   <img src=${pokemon.imageBackUrl} alt="${pokemon.name} back sprite">
      // `;
     
    
  }

  

  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
      modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
    });    
  
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

document.querySelector('#pokemon-list').addEventListener('click', () => {
    showModal();
  });

function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
       modalContainer.innerHTML = '';
       let modal = document.createElement("div") 


  function loadList(){
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

 return {
   add: add,
   getAll: getAll,
   addListItem: addListItem,
   showDetails: showDetails,
   loadList: loadList,
   loadDetails: loadDetails
 };

})();

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
 }); 
});
