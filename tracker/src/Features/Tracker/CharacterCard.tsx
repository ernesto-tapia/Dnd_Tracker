import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  TextField,
  makeStyles,
  Paper,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    height: "100%",
    width: "100%",
  },
});

const CharacterCard = (props: any) => {
  const { card, index } = props;
  const classes = useStyles();
  const { name, hp, xp, description } = card;
  const [life, setLife] = useState(hp);
  const [notes, setNotes] = useState(description);

  const minus = (e: any) => {
    const newLife = life < hp ? life - e.value : hp - e.value;
    setLife(newLife);
  };

  const handleDescriptionChange = (note: string) => {
    setNotes(note);
  };

  return (
    <Grid
      container
      direction="row"
      justify="flex-end"
      alignItems="center"
      className={classes.container}
      spacing={1}
    >
      <Grid item xs={6}>
        <Card className={classes.container}>
          <CardHeader title={`  [${index}] ${name}`} />
          <CardContent>
            {life <= 0 ? (
              <>
                <Typography variant="h4">{xp}xp</Typography>
              </>
            ) : (
              <>
                <Typography variant="h4">
                  {life || hp}/{hp}
                </Typography>
                <input
                  type="text"
                  onKeyDown={(e) => e.key === "Enter" && minus(e.target)}
                />
              </>
            )}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.container}>
          <TextField
            className={classes.container}
            multiline
            rows={7}
            label="Add Notes to identify the mob"
            onChange={(e: any) => handleDescriptionChange(e.target.value)}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CharacterCard;
