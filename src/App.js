import { useEffect, useState } from "react";
import { fetchAllPokemon, fetchEvolutionChainById, fetchPokemonDetailsByName } from "./api";

function App() {
    const [pokemonIndex, setPokemonIndex] = useState([])
    const [pokemon, setPokemon] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [pokemonDetails, setPokemonDetails] = useState('')
    const [pokemonEvolution, setPokemonEvolution] = useState('')

    useEffect(() => {
        const fetchPokemon = async () => {
            const {results: pokemonList} = await fetchAllPokemon()
            setPokemon(pokemonList)
            setPokemonIndex(pokemonList)
        }

        fetchPokemon().then(() => {
            /** noop **/
        })
        const fetchData = async (name) => {
            const response = await fetchPokemonDetailsByName(name)
             const newData = await response.json()
             console.log('new', newData)
         };
 
        fetchData().then(() => {

        })
        //we did not need the condition since we only need to make the api call once we do not need to make the call every time we search, //
    }, [])


    const onSearchValueChange = (event) => {
        const value = event.target.value
        setSearchValue(value)
        console.log(pokemonDetails)
        setPokemon(
            pokemon.filter(monster => monster.name.includes(value))     
        )
        //this handles if there is nothing in search, then we set the pokemon monster data to show everything for a good UX, since a user should not have to refresh page//
        if (value === "") {
          setPokemon(pokemonIndex);
        }
    }

   const onGetDetails = (name) => async () => {
    try {
        const data = await (await fetchPokemonDetailsByName(name))
       setPokemonDetails(data)
       const evolutionData = await (await fetchEvolutionChainById(data.id))
       setPokemonEvolution(evolutionData)
    } catch (err) {
        //error handling in case the api calls fail, will provide a message//
        console.log(err.message)
    }
}


    

    return (
      <div className={"pokedex__container"}>
        <div className={"pokedex__search-input"}>
          <input
            value={searchValue}
            onChange={onSearchValueChange}
            placeholder={"Search Pokemon"}
          />
        </div>
        <div className={"pokedex__content"}>
          {pokemon.length > 0 && (
            <div className={"pokedex__search-results"}>
              {pokemon.slice(0, 9).map((monster) => {
                return (
                  <div className={"pokedex__list-item"} key={monster.name}>
                    <div>{monster.name}</div>
                    <button onClick={onGetDetails(monster.name)}>
                      Get Details
                    </button>
                  </div>
                );
              })}
            </div>
          )}
          {pokemonDetails && (
            <div className={"pokedex__details"}>
              <h2>{pokemonDetails.name}</h2>
              <div className="pokedex_list-wrapper">
                <h3>
                  Types
                  <ul>
                    {pokemonDetails.types.map((t) => (
                      <li key={t.slot}>{t.type.name}</li>
                    ))}
                  </ul>
                </h3>
                <h3>
                  Moves
                  <ul>
                    {pokemonDetails.moves.slice(0, 4).map((m) => (
                      <li key={m.url}>{m.move.name}</li>
                    ))}
                  </ul>
                </h3>
              </div>
              
              <h3 className="pokedex_evol-header">Evolutions</h3>
              <div className="pokedex_evols">
              <div>{pokemonDetails.species.name}</div>
              <div>{pokemonEvolution?.chain?.evolves_to[0]?.species?.name}</div>
              <div>
                {
                  pokemonEvolution?.chain?.evolves_to[0]?.evolves_to[0]?.species
                    ?.name
                }
              </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

export default App;
