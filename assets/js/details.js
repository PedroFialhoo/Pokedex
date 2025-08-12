const urlParams = new URLSearchParams(window.location.search);
const pokemonName = urlParams.get('pokemon');
const pokemonDetail = document.getElementById('pokemonDetail');

function loadPokemonItensByName(name) {
    if (!name) {
        pokemonDetail.innerHTML = '<p>Nenhum Pokémon especificado.</p>';
        return;
    }
    

    pokeApi.getPokemonsByName(name).then((pokemon = []) => {
            const newHtml = `
                <div class="pokemon ${pokemon.type}" data-name="${pokemon.name}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </div>
            `;

        pokemonDetail.innerHTML = newHtml
    })
}

loadPokemonItensByName(pokemonName);
