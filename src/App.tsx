import { useState } from "react";
import { Header, Footer, SearchPokemon } from "./components";
import "./App.css";

function App() {
  const [counter, setCounter] = useState<number>(0);

  const handleAddCounter = () => {
    setCounter(counter + 1); // 1 - 2 - 3 - 4 - 5
  };

  return (
    <>
      <Header />
      <div>
        <h1>Mi primera web con React</h1>
        <p>Mi contador: {counter}</p>
        <button onClick={handleAddCounter}>Add couter</button>
      </div>
      <SearchPokemon />
      <Footer
        name="Linder Hassinger"
        sponsors={["sponsor 1", "sponsor 2", "sponsor 3", "sponsor 4"]}
      />
    </>
  );
}

export default App;
