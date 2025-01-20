import { useEffect, useState } from 'react'

function PokemonCard({ poke }) {
  const [details, setDetails] = useState(null)

  useEffect(() => {
    const getDetails = async () => {
      const response = await fetch(poke.url)

      if (!response.ok) return

      const data = await response.json()

      setDetails(data)
    }
    getDetails().then()
  }, [poke])

  if (!details) return null

  return (
    <div className="pokemon-card bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all flex flex-col items-center justify-between w-full max-w-xs">
      <div className="pokemon-image w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-4">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${details.id}.png`}
          alt={poke.name}
          className="w-full h-full object-contain"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
      <p className="pokemon-name text-xl font-semibold text-center text-blue-600 capitalize">
        {poke.name}
      </p>
      <p className="pokemon-id text-sm text-center text-gray-600">
        #{details.id}
      </p>
      <div className="pokemon-types mt-2 text-center text-sm text-gray-700">
        <p>
          <strong>Tipo:</strong>{' '}
          {details.types.map((type) => type.type.name).join(', ')}
        </p>
      </div>
    </div>
  )
}

export default PokemonCard
