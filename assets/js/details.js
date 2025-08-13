const urlParams = new URLSearchParams(window.location.search);
const pokemonName = urlParams.get('pokemon');
const pokemonDetail = document.getElementById('pokemonDetail');

function loadPokemonItensByName(name) {
    if (!name) {
        pokemonDetail.innerHTML = '<p>Nenhum Pokémon especificado.</p>';
        return;
    }
    

    pokeApi.getPokemonsByName(name).then((pokemon)  => {
            const newHtml = `
                    <div class="poke-container">
                        <div class="poke-background" style="background-image: url('../assets/images/background-${pokemon.type}.png'), url('../assets/images/background-normal.png'); "></div>
                        <img src="${pokemon.photo}" alt="${pokemon.name}" id="poke-img">
                    </div>
                    <h1 id="pokeName">${pokemon.name}</h1>
                    <div class="infos-details">
                    <h3>Tipo</h3>
                    <ol id="Tipo">
                    ${pokemon.types.map((type) => `<li>${type}</li>`).join('')}
                    </ol>
                    </div>
                    <div class="infos-details">
                    <h3>Atributos</h3>
                    <ol id="atributos">
                    <li>Altura - ${pokemon.height} m</li>
                    <li>Peso - ${pokemon.weight} kg</li>
                    </ol>
                    </div>
                    <div class="infos-details">
                    <h3>Habilidades</h3>
                    <ol id="habilidades">
                        <li>${pokemon.abilities[0]}</li>
                        <li>${pokemon.abilities[1]}</li>
                    </ol>
                    </div>
                    <div id="status" class="infos-details">
                    <h3>Status</h3>                    
                    <div class="container-progress">
                    <p id="hp">hp - ${pokemon.status[0]}%</p>
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: ${pokemon.status[0]}%;">
                        </div>
                    </div>
                    </div>
                    <div class="container-progress">
                        <p id="attack">attack - ${pokemon.status[1]}%</p>
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: ${pokemon.status[1]}%;">
                        </div>
                    </div>
                    </div>
                    <div class="container-progress">
                        <p id="defense">defense - ${pokemon.status[2]}%</p>
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: ${pokemon.status[2]}%;">
                        </div>
                    </div>
                    </div>
                    <div class="container-progress">
                        <p id="special-attack">special-attack - ${pokemon.status[3]}%</p>
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: ${pokemon.status[3]}%;">
                        </div>
                    </div>
                    </div>
                    <div class="container-progress">
                        <p id="special-defense">special-defense - ${pokemon.status[4]}%</p>
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: ${pokemon.status[4]}%">
                        </div>
                    </div>
                    </div>
                    <div class="container-progress">
                        <p id="speed">speed - ${pokemon.status[5]}%</p>
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: ${pokemon.status[5]}%">
                        </div>
                    </div>
                    </div>
                    </div>
            `;

        pokemonDetail.innerHTML = newHtml
    })
}

loadPokemonItensByName(pokemonName);
