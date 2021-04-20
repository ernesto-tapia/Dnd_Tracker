import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useCallback } from "react";
import AddIcon from "@material-ui/icons/Add";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import { actions } from "../Features/Character/reducer";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const labels = Object.freeze({
  TITLE: "D&D mob tracker",
});
export default function Bar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [drawer, setDrawer] = useState(false);
  console.log(drawer);
  const toggleDrawer = (isOpen: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer(!drawer);
  };

  const setCreative = useCallback(
    (create) => dispatch({ type: actions.createReceived, payload: create }),
    [dispatch]
  );

  const setClear = () =>
    dispatch({ type: actions.clearCharactersReceived, payload: null });

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
          <Drawer anchor={"left"} open={drawer}>
            <List>
              <ListItem
                button={true}
                key={"Add"}
                onClick={() => setCreative(true)}
              >
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"Add"}
                  onClick={() => setCreative(true)}
                />
              </ListItem>
              <ListItem button={true} key={"Remove"} onClick={() => setClear()}>
                <ListItemIcon>
                  <ClearAllIcon />
                </ListItemIcon>
                <ListItemText primary={"Remove"} />
              </ListItem>
            </List>
          </Drawer>
        </IconButton>
        <Typography variant="h4" color="inherit" className={classes.grow}>
          {labels.TITLE}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
