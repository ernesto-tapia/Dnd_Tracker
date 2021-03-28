import React, { useState } from "react";

const InitValues = Object.freeze({
  numOfEnemies: 14,
  name: "Bandit",
  amount: 1,
  dMax: 1,
  dMod: 0,
});

export const CreationModal = (props: any) => {
  const { cards, setCharacters } = props;
  const [character, setCharacter] = useState(InitValues);

  const onNumberChange = (number: number) => {
    setCharacter({ ...character, numOfEnemies: number });
  };

  const onTypeChange = (name: string) => {
    setCharacter({ ...character, name });
  };

  const onAmountChange = (number: number) => {
    setCharacter({ ...character, amount: number });
  };

  const onDMaxChange = (number: number) => {
    setCharacter({ ...character, dMax: number });
  };

  const onDModChange = (number: number) => {
    setCharacter({ ...character, dMod: number });
  };

  const onSubmit = () => {
    const { numOfEnemies, name, amount, dMax, dMod } = character;
    const newChars = [];
    for (let x = 0; x < numOfEnemies; x++) {
      for (let y = 0; y < amount; y++) {
        const hp = Math.floor(Math.random() * (dMax - 1) + 1) + dMod * 1;
        newChars.push({ name, hp, currentHp: hp });
      }
    }
    setCharacters({
      cards: [...cards, ...newChars],
      create: false,
    });
  };

  return (
    <div>
      <form>
        <label>Number of enemies: </label>
        <input
          type="text"
          value={character.numOfEnemies}
          name="enemies"
          onChange={(e: any) => onNumberChange(e.target.value)}
        />
        <label>Type: </label>
        <input
          type="text"
          value={character.name}
          onChange={(e: any) => onTypeChange(e.target.value)}
          name="type"
        />
        <label>Hp die: </label>
        <input
          type="number"
          value={character.amount}
          onChange={(e: any) => onAmountChange(e.target.value)}
          name="dAmount"
        />
        <input
          type="number"
          value={character.dMax}
          onChange={(e: any) => onDMaxChange(e.target.value)}
          name="dMax"
        />
        <input
          type="number"
          value={character.dMod}
          onChange={(e: any) => onDModChange(e.target.value)}
          name="dMod"
        />
        <button onClick={() => onSubmit()}>Create</button>
      </form>
    </div>
  );
};
export default CreationModal;
