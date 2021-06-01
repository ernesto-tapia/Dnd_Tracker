import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { TextField } from "@material-ui/core";
import { CreationData } from "../../Types/Character";
import { actions } from "../../Features/Character/reducer";

const InitValues = Object.freeze({
  numOfEnemies: 1,
  name: "Bandit",
  amount: 1,
  dMax: 8,
  dMod: 0,
  xp: 25,
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

  const onXpChange = (number: number) => {
    setCharacters({ ...characters, xp: number });
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
        <TextField
          label="Number of Enemies:"
          defaultValue={1}
          onChange={(e: any) => onNumberChange(e.target.value)}
        />
        <TextField
          label="Type:"
          defaultValue="Bandit"
          onChange={(e: any) => onTypeChange(e.target.value)}
        />
      </p>
      <p>
        <TextField
          label="Amount of die:"
          defaultValue="1"
          onChange={(e: any) => onAmountChange(e.target.value)}
        />
        <TextField
          label="Die size:"
          defaultValue={8}
          onChange={(e: any) => onDMaxChange(e.target.value)}
        />
      </p>
      <p>
        <TextField
          label="Modifier"
          defaultValue={0}
          onChange={(e: any) => onDModChange(e.target.value)}
        />
      </p>
      <p>
        <TextField
          label="Xp"
          defaultValue={25}
          onChange={(e: any) => onXpChange(e.target.value)}
        />
      </p>
      <button onClick={() => onSubmit()}>Create</button>
    </div>
  );
};
export default CreationModal;
