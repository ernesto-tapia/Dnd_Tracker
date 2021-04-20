import { Typography, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: {
    height: "100vh",
  },
});

export const Info = () => {
  const classes = useStyles();
  return (
    <Paper>
      <Typography>
        This is a self-made project, use the menu in the header to add mobs.
      </Typography>
    </Paper>
  );
};

export default Info;
