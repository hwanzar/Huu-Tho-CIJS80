import { useState } from 'react'

const App = () => {

  const [pokemons, setPokemons] = useState([])

  const handleFetchPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        return response.json()
      }).then((data) => {
        console.log(data)
        setPokemons(data.results)
      })
  }

  return (
    <div>
      <button onClick={handleFetchPokemon}>Fetch Pokemon</button>
      <ul>
        {pokemons.map(pokemon => {
          return <li key={pokemon.url}>{pokemon.name}</li>
        })}
      </ul>
    </div>
  )
}
export default App;