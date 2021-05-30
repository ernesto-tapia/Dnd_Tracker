import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreationData, CharacterData } from "../../Types/Character";

const initialState = Object.freeze({
  cards: [] as CharacterData[],
  create: false,
});

const addCharacters = (character: CreationData) => {
  const { numOfEnemies, name, amount, dMax, dMod } = character;
  const newChars = [] as CharacterData[];
  const enemiesArray = [...Array(numOfEnemies * 1)];
  const dieArray = [...Array(amount * 1)];
  console.log(dieArray, "array");
  enemiesArray.forEach((mob: any) => {
    let hp = 0;
    dieArray.forEach((die) => {
      const base = Math.floor(Math.random() * (dMax - 1) + 1);
      hp = hp + base;
      console.log(hp);
    });
    hp = hp + dMod * 1;
    newChars.push({ name, hp, currentHp: hp });
  });
  return newChars;
};

const slice = createSlice({
  name: "selectedMetrics",
  initialState,
  reducers: {
    createCharactersReceived: (state, action: PayloadAction<CreationData>) => {
      const newChars = addCharacters(action.payload);
      return { cards: [...state.cards, ...newChars], create: false };
    },
    clearCharactersReceived: (state, action: PayloadAction<any>) => {
      return { cards: [], create: false };
    },
    createReceived: (state, action: PayloadAction<boolean>) => {
      console.log(action);
      return { ...state, create: action.payload };
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
