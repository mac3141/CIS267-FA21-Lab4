const pokemon_count = 20;
const typeColors = {
    fire: '#FEAC72',
    grass: '#B6DA81',
    electric: '#F4E47C',
    water: '#73ADD3',
    ground: '#C6B56C',
    rock: '#D5B834',
    fairy: '#FEEBF9',
    poison: '#D0A9DB',
    bug: '#92BF5F',
    dragon: '#9D75FA',
    psychic: '#F7A1D3',
    flying: '#7BDAF4',
    fighting: '#E59461',
    normal: '#C9CDCF',
    ice: '#93DBF0',
    ghost: '#9E8BBB',
    dark: '#8F8F8F',
    steel: '#C4D3D4'
};

const app = Vue.createApp({
    data() {
        return {
            allPokemon: [],
            partyPokemon: [],
            filteredPokemon: [],
            maxPartySize: 6
        }
    },
    methods: {
        // async loadAllPokemon() {
        //     // load all Pokemon from API and save to allPokemon
        //     await fetchAllPokemon();
        //     renderPokemon(allPokemon);
        // },
        async fetchAllPokemon() {
            // load all Pokemon from API and save to allPokemon
            for (let i = 1; i <= pokemon_count; i++) {
                let pokemon = await this.getPokemonData(i);
                // let species = await getPokemonSpecies(i);
                pokemon.isFavorite = false;
                // pokemon.isLegendary = species.is_legendary;
                this.allPokemon.push(pokemon);
            }
        },
        async getPokemonData(id) {
            // get an individual pokemon
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
            const response = await fetch(url);
            const data = await response.json();

            return data;
        },
        // async renderPokemon(pokemonArray) {
        //     // render an array of pokemon objects as cards
        //     pokemonArray.forEach(pokemon => createPokemonCard(pokemon));
        // },
        filterPokemon() {
            // set filteredPokemon to matching pokemon based on search query
        },
        addPokemonToParty(pokemon) {
            // add to partyPokemon
        },
        removePokemonFromParty(pokemon) {
            // remove from partyPokemon
        },
        pokemonTypeString(pokemon) {
            if (pokemon.types.length > 1) {
                return `${pokemon.types[0].type.name} | ${pokemon.types[1].type.name}`;
            }
            else {
                return `${pokemon.types[0].type.name}`;
            }
        },
        // I FIXED IT
        pokemonColorStyle(pokemon) {
            if (pokemon.types.length > 1) {
                // let colors = [typeColors[pokemon.types[0].type], typeColors[pokemon.types[1].type]];
                return {
                    background: `linear-gradient(30deg, ${typeColors[pokemon.types[0].type.name]} 50%, ${typeColors[pokemon.types[1].type.name]} 50%)`
                }
            }
            else {
                return {
                    background: typeColors[pokemon.types[0].type.name]
                }
            }
        }
    }
}).mount("#app");

app.fetchAllPokemon();