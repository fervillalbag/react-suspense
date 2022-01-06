import { Suspense } from "react";
import { dataCharacters } from "./UserDetails";

const resource = dataCharacters();

function App() {
  return (
    <div className="App">
      <h1>React Suspense</h1>

      <Suspense fallback="Loading..">
        <DataDisplayCharacters />
      </Suspense>
    </div>
  );
}

const DataDisplayCharacters = () => {
  let characters;
  characters = resource.data.read();

  return (
    <div>
      {characters.map((character: any) => (
        <div key={character.char_id}>
          <p>{character.name}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
