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
                    <img src="${pokemon.photo}" alt="" id="poke-img">
                    <h1 id="pokeName">${pokemon.name}</h1>
                    <h3>Atributos</h3>
                    <ol id="atributos">
                    <li>${pokemon.height} cm</li>
                    <li>${pokemon.weight} kg</li>
                    </ol>
                    <h3>Habilidades</h3>
                    <ol id="habilidades">
                        <li>${pokemon.abilities[0]}</li>
                        <li>${pokemon.abilities[1]}</li>
                    </ol>
                    <div id="status">
                    <div class="container-progress">
                    <p id="hp"></p>
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: ${pokemon.status[0]}%;">
                        </div>
                    </div>
                    </div>
                    <div class="container-progress">
                        <p id="attack"></p>
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: ${pokemon.status[1]}%;">
                        </div>
                    </div>
                    </div>
                    <div class="container-progress">
                        <p id="defense"></p>
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: ${pokemon.status[2]}%;">
                        </div>
                    </div>
                    </div>
                    <div class="container-progress">
                        <p id="special-attack"></p>
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: ${pokemon.status[3]}%;">
                        </div>
                    </div>
                    </div>
                    <div class="container-progress">
                        <p id="speed"></p>
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: ${pokemon.status[4]}%">
                        </div>
                    </div>
                    </div>
                    </div>
            `;

        pokemonDetail.innerHTML = newHtml
    })
}

loadPokemonItensByName(pokemonName);
