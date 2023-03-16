import { useState, useEffect } from "react";
import { getPokemon } from "../../services";

export default function PokeGame() {
  const [pokemon, setPokemon] = useState<any>(null);

  const [pokeValue, setPokeValue] = useState<string>("");

  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const getRandomId = (): number => Math.floor(Math.random() * 1000) + 1;

  const getRandomPokemon = async () => {
    const id = getRandomId();

    const pokemon = await getPokemon(String(id));

    setPokemon(pokemon);
  };

  const handleMatchPokemon = () => {
    if (!pokeValue) return;

    setPokeValue("");

    if (pokeValue.toLowerCase() !== pokemon.name) {
      alert("Fallaste");
      return;
    }

    alert("Lo hiciste perfecto!!!");
    setIsCorrect(true);
  };

  useEffect(() => {
    getRandomPokemon();
  }, []);

  return (
    <div>
      <h1>Cual es ese Pokemon?</h1>
      {pokemon && (
        <>
          <img
            className={!isCorrect ? "hide-pokemon" : ""}
            src={pokemon?.sprites?.other.dream_world.front_default}
            alt=""
          />
          <input
            type="text"
            placeholder="Escribir el nombre del pokemon"
            value={pokeValue}
            onChange={(e) => setPokeValue(e.target.value)}
          />
          <button onClick={handleMatchPokemon}>Verificar</button>
        </>
      )}
    </div>
  );
}
