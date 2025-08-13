const pokemonList = document.getElementById('pokemonList')
const loadMore = document.getElementById('loadMore')
const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search')
let offset = 0
const limit = 9

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {

    const newHtml = pokemons.map((pokemon) => 
        `<li class="pokemon ${pokemon.type}" data-name="${pokemon.name}">
             <span class="number">#${pokemon.number}</span>
             <span class="name">${pokemon.name}</span>
             <div class="detail">
                 <ol class="types">
                 ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                 </ol>
                 <img src="${pokemon.photo}" alt="${pokemon.name}">
             </div>               
             
         </li>
        `).join('')

    pokemonList.innerHTML += newHtml

    // document.querySelectorAll('#pokemonList li').forEach(li => {
    //     li.addEventListener('click', () => {
    //         const name = li.getAttribute('data-name');
    //         window.location.href = `details.html?pokemon=${name}`;
    //     });
    //     });

    })
}

function loadPokemonItensByName(name){
   if(name === '') return

    pokeApi.getPokemonsByName(name).then((pokemon) => {
        if(!pokemon) return;
    const newHtml =
        `<li class="pokemon ${pokemon.type}" data-name="${pokemon.name}">
             <span class="number">#${pokemon.number}</span>
             <span class="name">${pokemon.name}</span>
             <div class="detail">
                 <ol class="types">
                 ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                 </ol>
                 <img src="${pokemon.photo}" alt="${pokemon.name}">
             </div>               
             
         </li>
        `

    pokemonList.innerHTML = newHtml

    document.querySelectorAll('#pokemonList li').forEach(li => {
        li.addEventListener('click', () => {
            const name = li.getAttribute('data-name');
            window.location.href = `details.html?pokemon=${name}`;
        });
        });
    })
}

loadPokemonItens(offset, limit)

loadMore.addEventListener('click', () =>{
    offset += limit
    loadPokemonItens(offset, limit)
})

function searchPokemonName(){    
    let search = document.getElementById('search').value.toLowerCase();
    loadPokemonItensByName(search)
}

searchBtn.addEventListener('click', () =>{
    searchPokemonName()
})

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchPokemonName();
    }
});

