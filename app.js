const pokemon_count = 20;

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
        }
    }
}).mount("#app");

app.fetchAllPokemon();