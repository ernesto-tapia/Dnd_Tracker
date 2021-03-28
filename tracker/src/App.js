import logo from "./logo.svg";
import "./App.css";
import CreationModal from "./Tracker/CreationModal";
import CharacterCard from "./Tracker/CharacterCard";
import { useState } from "react";

const initialValues = Object.freeze({
  cards: [],
  create: false,
});

function App() {
  const [characters, setCharacters] = useState(initialValues);

  if (characters.create)
    return (
      <CreationModal setCharacters={setCharacters} cards={characters.cards} />
    );
  return (
    <div className="App">
      <button onClick={() => setCharacters({ ...characters, create: true })}>
        Add
      </button>
      {characters.cards.length > 0 &&
        characters.cards.map((card) => <CharacterCard card={card} />)}
    </div>
  );
}

export default App;
