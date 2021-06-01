import { Typography, Paper, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    height: "50vh",
    width: "50vw",
    marginTop: "25vh",
    marginLeft: "25vw",
    textAlign: "center",
  },
  container: {
    width: "100%",
    height: "80%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    padding: 1,
  },
  text: {
    fontWeight: "bold",
  },
  item: {
    height: "100%",
  },
});

export const Info = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Box className={classes.container}>
        <Typography className={classes.text}>
          This site uses Cookies to save your monsters, by using the app you
          agree that this information will be saved.
        </Typography>
      </Box>
      <Typography>Please consider supporting by donating to</Typography>
    </Paper>
  );
};

export default Info;
