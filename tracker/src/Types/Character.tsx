export type CreationData = {
  name: string;
  amount: number;
  numOfEnemies: number;
  dMax: number;
  dMod: number;
};

export type CharacterData = {
  name: string;
  hp: number;
  currentHp: number;
};

export type die = {
  amount: number;
  max: number;
  mod: number;
};

export type Characters = {
  characters: CharacterData[];
};
