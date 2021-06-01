export type CreationData = {
  name: string;
  amount: number;
  numOfEnemies: number;
  dMax: number;
  dMod: number;
  xp: number;
};

export type CharacterData = {
  name: string;
  hp: number;
  description: string;
  xp: number;
};

export type die = {
  amount: number;
  max: number;
  mod: number;
};

export type Characters = {
  characters: CharacterData[];
};
