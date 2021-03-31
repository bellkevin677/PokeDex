const pokeContainer = document.querySelector(`#container`);

const numOfPokemon = 150;

// The createPokeCard function creates a new card/div and adds the new card to webpage/document inside of the "container" div
function createPokeCard(pokemon){
    const pokeCard = document.createElement(`div`);
    pokeCard.classList.add(`pokemon`);
    pokeContainer.append(pokeCard);
    // Setting innerHTML for the new card usig the data/object that is passed onto the 'pokemon' parameter. Also, using the toUpperCase method on the pokemon nameso it will display in UPPERCASE text.
    pokeCard.innerHTML = `
    <div class="img-container">
        <img src="${pokemon.data.sprites.front_shiny}" alt="${pokemon.data.name}" />
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
    `;
}

// The getPokemonData function makes an Axios get request to the PokeAPI using a specific pokemon ID/number then takes the return data and passes it into the creatPokeCard function.
async function getPokemonData(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonData = await axios.get(url);
    createPokeCard(pokemonData);
}

// The getPokemon function loops through all the pokemon IDs and runs/executes the getPokemonData function for each ID
async function getPokemon(){
    for (i = 1; i <= numOfPokemon; i++){
        await getPokemonData(i);
    }
}
getPokemon();


