import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { CreationData } from "../../Types/Character";
import { actions } from "../../Features/Character/reducer";

const InitValues = Object.freeze({
  numOfEnemies: 1,
  name: "Bandit",
  amount: 1,
  dMax: 1,
  dMod: 0,
});

export const CreationModal = () => {
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState(InitValues);

  const onNumberChange = (number: number) => {
    setCharacters({ ...characters, numOfEnemies: number });
  };

  const onTypeChange = (name: string) => {
    setCharacters({ ...characters, name });
  };

  const onAmountChange = (number: number) => {
    setCharacters({ ...characters, amount: number });
  };

  const onDMaxChange = (number: number) => {
    setCharacters({ ...characters, dMax: number });
  };

  const onDModChange = (number: number) => {
    setCharacters({ ...characters, dMod: number });
  };

  const setSelections = useCallback(
    (characters: CreationData) =>
      dispatch({ type: actions.createCharactersReceived, payload: characters }),
    [dispatch]
  );

  const onSubmit = () => {
    setSelections(characters);
  };

  return (
    <div>
      <p>
        <label>Number of enemies: </label>
        <input
          type="text"
          value={characters.numOfEnemies}
          name="enemies"
          onChange={(e: any) => onNumberChange(e.target.value)}
        />
      </p>
      <p>
        <label>Type: </label>
        <input
          type="text"
          value={characters.name}
          onChange={(e: any) => onTypeChange(e.target.value)}
          name="type"
        />
      </p>
      <label>Hp die: </label>
      <input
        type="number"
        value={characters.amount}
        onChange={(e: any) => onAmountChange(e.target.value)}
        name="dAmount"
      />
      <span>d</span>
      <input
        type="number"
        value={characters.dMax}
        onChange={(e: any) => onDMaxChange(e.target.value)}
        name="dMax"
      />
      <span>modifier</span>
      <input
        type="number"
        value={characters.dMod}
        onChange={(e: any) => onDModChange(e.target.value)}
        name="dMod"
      />
      <button onClick={() => onSubmit()}>Create</button>
    </div>
  );
};
export default CreationModal;
