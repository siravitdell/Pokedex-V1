const pokemon_container = document.getElementById('pokemon_container');

const pokemons_number = 150;

const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

const main_types = Object.keys(colors);

const fetchPokemons = async function() {
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
}

const getPokemon = async function (id) {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let res =  await fetch(url);
    let pokemon = await res.json();
    createCard(pokemon);
}

function createCard(pokemon) {
    let pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const pokemon_type = pokemon.types.map(el => el.type.name);
    const type = main_types.find(type => pokemon_type.indexOf(type) > -1);
    const color = colors[type];
    let pokemonInnerHTML = ` <div class = "image_container"> <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"</div> 
    <div class = "info">
        <span class = "number">#${pokemon.id.toString().padStart(3,'0')}</span>
        <h3 class = "name"><span>${pokemon.name}</span></h3>
        <h5 class = "type">Type: <span>${type}</span></h5>
    </div>
    `;
    pokemonEl.style.backgroundColor = color ;
    
    pokemonEl.innerHTML = pokemonInnerHTML;

    pokemon_container.appendChild(pokemonEl);
}

fetchPokemons();