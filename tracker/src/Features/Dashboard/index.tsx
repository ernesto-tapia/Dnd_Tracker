import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import CharacterCard from "../Tracker/CharacterCard";
import Description from "./Description";
import { getCards } from "../Character/selector";
import { useSelector } from "react-redux";
import CreationModal from "../Tracker/CreationModal";

const initialValues = Object.freeze({
  cards: [],
  create: false,
});

const useStyles = makeStyles({
  container: {
    width: "50vw",
    margin: "20px",
    padding: 1,
  },
});

export default () => {
  const { character } = useSelector(getCards);
  const { cards, create } = character || initialValues;
  const classes = useStyles();
  if (create) return <CreationModal />;
  return (
    <>
      {cards?.length > 0 ? (
        cards.map((card: any, index: number) => (
          <Box className={classes.container}>
            <CharacterCard card={card} index={index} key={index} />
          </Box>
        ))
      ) : (
        <Description />
      )}
    </>
  );
};
