
const listPokemon = document.querySelector('#pokemon');
const pokemon_number = 50;


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
            <img src="${data.sprites.front_default}"/>
        </li>`
}
displayPokemon();

// Function search 

const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', (e) =>{
    const searchLetters = e.target.value;
    const list_Poke = document.querySelectorAll('.character');
    console.log(list_Poke)
    searchPokemon(searchLetters, list_Poke)
});

const searchPokemon = (letters, el) =>{
    if(letters.length > 0){
        for(let i = 0; i <= el.length; i++){
            if(el[i].textContent.toLowerCase().includes(letters)){
                el[i].style.display = "block";
            }else{
                el[i].style.display = "none";
            }
        }
    }
}



window.addEventListener("load", () =>{
      setTimeout(() => {
        const loader = document.querySelector('.loader');
        
        loader.style.display = 'none';
    }, 3000);
});