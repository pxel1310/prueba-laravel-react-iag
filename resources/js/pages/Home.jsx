import { useState, useEffect } from 'react'
import PokemonCard from '../components/PokemonCard.jsx'
import Pag from '../components/Pag.jsx'

function Home() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const fetchPokemon = async (page = 1) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}&limit=20`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    )
    const data = await response.json()
    setPokemon(data.results)
    setTotalPages(Math.ceil(data.count / 20))
  }

  useEffect(() => {
    fetchPokemon(page)
  }, [page])

  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }

  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm w-full">
        {/* Navbar */}
        <header className="flex justify-between items-center p-4 bg-indigo-600 text-white">
          <h1 className="text-lg font-semibold">Pokédex - Prueba técnica</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-indigo-700 rounded-md hover:bg-indigo-800 transition"
          >
           Cerrar sesión
          </button>
        </header>

        {/* Main Content */}
        <main className="p-4">
          {/* Search Input */}
          <div className="mb-6 text-center">
            <input
              type="text"
              placeholder="Search Pokémon..."
              className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Pokémon Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filteredPokemon.length > 0 ? (
              filteredPokemon.map((poke) => (
                <PokemonCard key={poke.name} poke={poke} />
              ))
            ) : (
              <p className="col-span-4 text-center text-gray-600">
               Pokémon no encontrado
              </p>
            )}
          </div>

          {/* Pagination */}
          <div className="mt-6">
            <Pag page={page} setPage={setPage} totalPages={totalPages} />
          </div>
        </main>

        {/* Footer */}
        {/*    background: linear-gradient(135deg, #34d399, #06b6d4);*/}
        <footer className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-center py-3">
          <h2>Ian Ayala González</h2>
        </footer>
      </div>
    </div>
  )
}

export default Home
