const app = Vue.createApp({
    data() {
        return {
            allPokemon: [
                { id: 1, name: "bulbasaur", type: ["grass", "poison"] },
                { id: 2, name: "ivysaur", type: ["grass", "poison"] }
            ],
            partyPokemon: [{ id: 2, name: "ivysaur", type: "grass" }],
            filteredPokemon: [],
            maxPartySize: 6
        }
    },
    methods: {
        async loadAllPokemon() {
            // load all Pokemon from API and save to allPokemon
        },
        async getPokemon(id) {
            // get an individual pokemon
        },
        async renderPokemon(pokemonArray) {
            // render an array of pokemon objects as cards
        },
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