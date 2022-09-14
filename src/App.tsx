import useFetch from './hooks/useFetch'
import Characters from './components/Characters'
import Character from './components/Character'
import { character } from './components/Character'

const apiUrl = 'https://rickandmortyapi.com/api/character'

type ApiResponse = {
  results: character[]
}

function App() {
  const { data, loading } = useFetch<ApiResponse>(`${apiUrl}`)

  return (
    <main className="main">
      <h1 className="title">Rick and Morty API</h1>
      <Characters>
        {loading && <span> Loading ...</span>}
        {data &&
          data.results.map((character) => {
            return <Character key={character.id} character={character} />
          })}
      </Characters>
    </main>
  )
}

export default App
