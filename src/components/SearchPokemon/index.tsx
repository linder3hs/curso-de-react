import { FormEvent, useState } from "react";
import { getPokemon } from "../../services";

export default function SearchPokemon() {
  const [name, setName] = useState<string>("");

  const [pokemon, setPokemon] = useState<any>(null);

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) return;
    
    setLoading(true);
    
    const pokemon = await getPokemon(name);
    
    setLoading(false);
    setPokemon(pokemon);
    setName("");
  };

  return (
    <>
      <h1>Search Pokemon</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa el nombre o ID del pokemon"
          />
          <button type="submit">Buscar</button>
        </form>
      </div>
      <div>
        {loading && <p>Cargando...</p>}
        <img
          width={300}
          src={pokemon?.sprites?.other.dream_world.front_default}
          alt=""
        />
        <p className="pokename">{pokemon?.name}</p>
      </div>
    </>
  );
}
