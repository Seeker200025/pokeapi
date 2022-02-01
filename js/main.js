
const listPokemon = document.querySelector('#pokemon');
const pokemon_number = 200;


const loadPokemon = async(id) =>  {
    
    try {
        const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
        let data  = await res.json();
        // console.log(data)
        createPokemon(data)

    }catch(err){console.error(err)}
};

 const displayPokemon =  async () =>{
    for(let i = 1; i <= pokemon_number; i++){
        await loadPokemon(i);
    }
}; 



const createPokemon = (data) => {
  
    listPokemon.innerHTML += `
            <li class="character">
            <h2>${data.species.name}</h2>
            <p>Type: ${data.types[0].type.name}</p>
            <img src="${data.sprites.front_default}"></img>
        </li>`
}
displayPokemon();
