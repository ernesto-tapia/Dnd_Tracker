import CharacterCard from "../Tracker/CharacterCard";
import Description from "./Description";
import { getCards } from "../Character/selector";
import { useSelector } from "react-redux";
import CreationModal from "../Tracker/CreationModal";

const initialValues = Object.freeze({
  cards: [],
  create: false,
});
export default () => {
  const { character } = useSelector(getCards);
  const { cards, create } = character || initialValues;
  console.log("cartas", cards, create, character);
  if (create) return <CreationModal />;
  return (
    <>
      {cards?.length > 0 ? (
        cards.map((card: any, index: number) => (
          <CharacterCard card={card} index={index} key={index} />
        ))
      ) : (
        <Description />
      )}
    </>
  );
};
