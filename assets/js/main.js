const pokemonList = document.getElementById('pokemonList')
const loadMore = document.getElementById('loadMore')
let offset = 0
const limit = 9

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {

    const newHtml = pokemons.map((pokemon) => 
        `<li class="pokemon ${pokemon.type}">
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
    })
}

loadPokemonItens(offset, limit)

loadMore.addEventListener('click', () =>{
    offset += limit
    loadPokemonItens(offset, limit)
})