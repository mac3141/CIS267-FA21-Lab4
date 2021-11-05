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

async function getPokemonData(id) {
    // get an individual pokemon
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

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
        async loadPokemon() {
            // load all Pokemon from API and save to allPokemon
            const pokemon_count = 100;
            const pokemonArray = [];
            for (let i = 1; i <= pokemon_count; i++) {
                let pokemon = await getPokemonData(i);
                // pokemon.inParty = false;
                pokemonArray.push(pokemon);
            }

            pokemonArray.forEach(pokemon => {
                this.allPokemon.push(pokemon);
            });
        },
        filterPokemon() {
            // set filteredPokemon to matching pokemon based on search query
            const searchInput = document.getElementById("searchInput");
            const searchQuery = searchInput.value;
            console.log(searchQuery);

            // search by name, id, or type
            this.filteredPokemon = allPokemon.filter(pokemon => {
                if (pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()) || pokemon.id.toString().includes(searchQuery) || this.pokemonTypeString(pokemon).includes(searchQuery)) {
                    return true;
                }
            });
        },
        addPokemonToParty(pokemon) {
            // add to partyPokemon
            pokemon.guid = this.getGUID();
            console.log(pokemon.guid);
            this.partyPokemon.push(pokemon);
        },
        removePokemonFromParty(pokemon) {
            // remove from partyPokemon
            this.partyPokemon = this.partyPokemon.filter(p => p.guid != pokemon.guid);
        },
        clearParty() {
            // empty party
            this.partyPokemon = [];
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
                return {
                    background: `linear-gradient(30deg, ${typeColors[pokemon.types[0].type.name]} 50%, ${typeColors[pokemon.types[1].type.name]} 50%)`
                }
            }
            else {
                return {
                    background: typeColors[pokemon.types[0].type.name]
                }
            }
        },
        getGUID() {
            return Math.floor(Math.random() * 100000);
        }
    },
    computed: {
        filteredPokemonIsEmpty() {
            return this.filteredPokemon.length == 0;
        }
    },
    mounted() {
        this.loadPokemon();
    }
}).mount("#app");