import { useState } from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";

const CharacterCard = (props: any) => {
  const { card, index } = props;
  const { name, hp } = card;
  const [life, setLife] = useState(hp);

  const minus = (e: any) => {
    const newLife = life < hp ? life - e.value : hp - e.value;
    setLife(newLife);
  };
  if (life <= 0) return <Typography>dead</Typography>;

  return (
    <Card>
      <CardHeader title={`  [${index}] ${name}`} />
      <CardContent>
        <Typography variant="h4">
          {life || hp}/{hp}
        </Typography>
        <input
          type="text"
          onKeyDown={(e) => e.key === "Enter" && minus(e.target)}
        />
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
