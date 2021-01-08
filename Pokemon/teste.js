
// fetch('https://pokeapi.co/api/v2/pokemon-species/1/')
// .then(response => response.json())
// .then(data => console.log(data))



const fetchPokemons = () => {
    for(let index = 1; index <= 50; index+=1) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
        .then(response => response.json())
        .then((data) => {
            const imagem = data.sprites.other.dream_world.front_default
            const obj = {
                name: data.name,
                urls: imagem
            }
            criandoDados(obj)
        })
    }
}

fetchPokemons()
const criandoDados= (object) => {
    const div = document.createElement('div');
    document.querySelector('.container').appendChild(div);
    div.className = 'divs'
    const h2 = document.createElement('h2')
    div.appendChild(h2)
    h2.innerText = object.name
    const img = document.createElement('img')
    div.appendChild(img)
    img.src = `${object.urls}`
}
const text = document.querySelector('.input')

const fetchPokemon = () => {

    const buttom = document.querySelector('.btn')

    buttom.addEventListener('click', () => {
        document.querySelector('.container').innerHTML = '';
        if(text.value){
            fetch(`https://pokeapi.co/api/v2/pokemon/${text.value}`)
            .then(response => response.json())
            .then((data) => {
                const imagem = data.sprites.other.dream_world.front_default
                const obj = {
                    name: data.name,
                    urls: imagem
                }
                criandoDados(obj)
            }) 
        }

    })
}

fetchPokemon()

document.querySelector('.all').addEventListener('click', () => {
    for(let index = 1; index <= 55; index+=1) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
        .then(response => response.json())
        .then((data) => {
            const imagem = data.sprites.other.dream_world.front_default
            const obj = {
                name: data.name,
                urls: imagem
            }
            criandoDados(obj)
        })
    }
} )
