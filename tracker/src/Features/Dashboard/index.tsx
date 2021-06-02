import { useState } from "react";
import {
  Box,
  makeStyles,
  TextField,
  MenuItem,
  Typography,
} from "@material-ui/core";
import CharacterCard from "../Tracker/CharacterCard";
import { getCards } from "../Character/selector";
import { useSelector } from "react-redux";
import CreationModal from "../Tracker/CreationModal";

const initialValues = Object.freeze({
  cards: [],
  create: true,
  players: Object.freeze([
    {
      value: 1,
      label: 1,
    },
    {
      value: 2,
      label: 2,
    },
    {
      value: 3,
      label: 3,
    },
    {
      value: 4,
      label: 4,
    },
    {
      value: 5,
      label: 5,
    },
    {
      value: 6,
      label: 6,
    },
    {
      value: 7,
      label: 7,
    },
    {
      value: 8,
      label: 8,
    },
    {
      value: 9,
      label: 9,
    },
    {
      value: 10,
      label: 10,
    },
  ]),
});

const useStyles = makeStyles({
  container: {
    width: "50vw",
    height: "20vh",
    margin: "20px",
    padding: 1,
  },
  textField: {
    width: "4vw",
  },
});

const Index = () => {
  const { character } = useSelector(getCards);
  const { cards, create } = character || initialValues;
  const [xpPool, setXpPool] = useState(0);
  const [players, setPlayers] = useState(1);
  const classes = useStyles();

  const handlePlayerChange = (event: any) => {
    setPlayers(event.target.value);
  };

  const handleXpChange = (newXp: number) => {
    console.log(newXp);
    setXpPool(xpPool + newXp);
  };
  if (create) return <CreationModal />;
  return (
    <>
      <TextField
        className={classes.textField}
        label="Players"
        select
        value={players}
        onChange={handlePlayerChange}
      >
        {initialValues.players.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Typography>{xpPool / players} per person</Typography>
      {cards?.length > 0 &&
        cards.map((card: any, index: number) => (
          <Box className={classes.container}>
            <CharacterCard
              card={card}
              index={index}
              key={index}
              handleXpChange={handleXpChange}
            />
          </Box>
        ))}
    </>
  );
};
export default Index;
