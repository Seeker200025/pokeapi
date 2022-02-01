
const listPokemon = document.querySelector('#charactersList');
const pokemon_number = 2;


const loadPokemon = async(id) =>  {
    
    try {
        const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
        let data  = await res.json();
        console.log(data)
        createPokemon(data)

    }catch(err){console.error(err)}
};

 const displayPokemon =  async () =>{
    for(let i = 1; i <= pokemon_number; i++){
        await loadPokemon(i);
    }
}; 



const createPokemon = (pokemon) => {
    // e = pokemon;
    listPokemon.innerHTML += `<li>${pokemon.name}</li>`
}
displayPokemon();
