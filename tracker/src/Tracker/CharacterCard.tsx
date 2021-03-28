import React, { useState } from "react";

const CharacterCard = (props: any) => {
  const { card } = props;
  const { name, hp } = card;
  const [life, setLife] = useState(hp);

  const minus = (e: any) => {
    const newLife = hp - e.value;
    setLife(newLife);
  };
  return (
    <div>
      <p>
        {name} {life || hp}/{hp}
      </p>
      <p>
        REMOVE life
        <input
          type="text"
          onKeyDown={(e) => e.key === "Enter" && minus(e.target)}
        />
      </p>
    </div>
  );
};

export default CharacterCard;
