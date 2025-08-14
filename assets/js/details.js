const urlParams = new URLSearchParams(window.location.search);
const pokemonName = urlParams.get('pokemon');
const pokemonDetail = document.getElementById('pokemonDetail');
const shinyButton = document.getElementById('shiny-btn');
let mode = 'normal';

function loadPokemonDetails(name, isShiny = false) {
    if (!name) {
        pokemonDetail.innerHTML = '<p>Nenhum Pokémon especificado.</p>';
        return;
    }

    pokeApi.getPokemonsByName(name).then((pokemon) => {
        const photo = isShiny ? pokemon.photoShiny : pokemon.photo;

        const newHtml = `
            <div class="poke-container">
                <div class="poke-background" style="background-image: url('./assets/images/background-${pokemon.type}.png'), url('./assets/images/background-normal.png');"></div>
                <img src="${photo}" alt="${pokemon.name}" id="poke-img">
            </div>
            <h1 id="pokeName">${pokemon.name}</h1>
            <button type="button" id="shiny-btn" style="padding: 10px;">${isShiny ? 'Normal' : 'Shiny'}</button>
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
                ${pokemon.status.map((stat, index) => `
                    <div class="container-progress">
                        <p>${['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'][index]} - ${stat}%</p>
                        <div class="progress-bar-container">
                            <div class="progress-bar" style="width: ${stat}%;"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        pokemonDetail.innerHTML = newHtml;

        
        document.getElementById('shiny-btn').addEventListener('click', () => {
            mode = (mode === 'normal') ? 'shiny' : 'normal';
            loadPokemonDetails(pokemonName, mode === 'shiny');
        });
    });
}

loadPokemonDetails(pokemonName, false);

