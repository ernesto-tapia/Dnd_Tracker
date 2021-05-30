import { Typography, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    height: "50vh",
    width: "50vw",
    marginTop: "25vh",
    marginLeft: "25vw",
  },
});

export const Info = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography>
        This is a self-made project, use the menu in the header to add mobs.
      </Typography>
      <Typography>Please consider supporting by donating to</Typography>
    </Paper>
  );
};

export default Info;
