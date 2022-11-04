// creating a function where i will call get the api 
// https://superheroapi.com/api/access-token/

let image = document.getElementById('image');
let superhero = document.getElementById('getsuperhero');
const buttons = document.getElementById('buttons');
const searchButton = document.getElementById('searchButton');
const getnewhero = document.getElementById('getnewhero');
const searchInput = document.getElementById('searchInput');
const BASE_URL = `https://www.superheroapi.com/api.php/2029877740539194`

const getSuperHero = (id) => {
  fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json.image)
      getHeroInfo(json);
      console.log(json.powerstats)

      // document.querySelector('body').innerHTML += `<img src = "${img}">`
    })
}

// const combat = `<p>combat: ${json.powerstats.combat}</p>`
// const intelligence = `<p>intelligence: ${json.powerstats.intelligence}</p>`
// const power = `<p>power: ${json.powerstats.power}</p>`
// we had to call so many times the same p function so we will use a map or foreach loop in function

const stattoEmoji = {
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡',
  durability: '🏋️‍♂️',
  power: '📊',
  combat: '⚔️',
}
const getHeroInfo = (character) => {

  // loop through all the powerwstats
  const name = `<h2>${character.name}</h2>`
  const img = `<img src= "${character.image.url}" height = 200px width = 200px>`
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p>${stattoEmoji[stat]} ${stat.toUpperCase()}  : ${character.powerstats[stat]}</p>`
  }).join('')
  getnewhero.innerHTML = `${name} ${img} ${stats}`
  // const stats = `<p>combat: ${json.powerstats.stats}</p>`
}



const getSearchSuperHero = (name) => {
  console.log(searchInput.value);
  fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
      const hero = json.results[0]
      console.log(hero)
      getHeroInfo(hero);
      // document.querySelector('body').innerHTML += `<img src = "${img}">`
    })
}

searchButton.onclick = () => getSearchSuperHero(searchInput.value)


const randomHero = () => {
  let val = Math.ceil(Math.random() * 731)
  return val;
}

buttons.onclick = () => getSuperHero(randomHero())

// buttons.onclick = () => {
//   let val = Math.ceil(Math.random() * 731)
//   getSuperHero(val);
// }
