import React, { useState } from "react";

const CharacterCard = (props: any) => {
  const { card, index } = props;
  const { name, hp } = card;
  const [life, setLife] = useState(hp);

  const minus = (e: any) => {
    const newLife = life < hp ? life - e.value : hp - e.value;
    setLife(newLife);
  };
  if (life <= 0) return <p>ded</p>;

  return (
    <div>
      <p>
        [{index}] {name} {life || hp}/{hp}
        <input
          type="text"
          onKeyDown={(e) => e.key === "Enter" && minus(e.target)}
        />
      </p>
    </div>
  );
};

export default CharacterCard;
