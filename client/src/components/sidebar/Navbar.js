import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  ChevronLeft,
  ChevronRight,
  PlaylistAddCheck,
  LocalShipping,
  Build,
  Assessment,
  FolderOpen,
  Settings,
  AddCircle,
} from "@material-ui/icons";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Icon,
} from '@material-ui/core';
import { Nav } from 'mui-layout';
// Used to link NavBar to /pages/{PageLink.js}
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import ActiveProjects from '../pages/ActiveProjects';
import NewProjectForm from '../pages/NewProject.Forms';
import Production from '../pages/Production';
import Testing from '../pages/Testing';
import Shipping from '../pages/Shipping';

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',

  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <Router>
      <Nav renderIcon={collapsed => collapsed ? <ChevronRight /> : <ChevronLeft />}>
        <List>
          <Link to="/newproject" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <Icon>
                  <AddCircle />
                </Icon>
              </ListItemIcon>
              <ListItemText
                primary={"Create"}
                primaryTypographyProps={{ noWrap: true }}
              />
            </ListItem>
          </Link>

          <Link to="/" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <Icon>
                  <FolderOpen />
                </Icon>
              </ListItemIcon>
              <ListItemText
                primary={"Modules"}
                primaryTypographyProps={{ noWrap: true }}
              />
            </ListItem>
          </Link>

          <Link to="/production" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <Icon>
                  <Build />
                </Icon>
              </ListItemIcon>
              <ListItemText
                primary={"Production"}
                primaryTypographyProps={{ noWrap: true }}
              />
            </ListItem>
          </Link>

          <Link to="/testing" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <Icon>
                <PlaylistAddCheck />
              </Icon>
            </ListItemIcon>
            <ListItemText
              primary={"Testing"}
              primaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>
          </Link>

          <Link to="/shipping" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <Icon>
                <LocalShipping />
              </Icon>
            </ListItemIcon>
            <ListItemText
              primary={"Shipping and Receiving"}
              primaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>
          </Link>

          <ListItem button disabled="true">
            <ListItemIcon>
              <Icon>
                <Assessment />
              </Icon>
            </ListItemIcon>
            <ListItemText
              primary={"Analytics"}
              primaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>

          <Divider style={{ margin: "12px 0" }} />

          <ListItem button disabled="true">
            <ListItemIcon>
              <Icon >
                <Settings />
              </Icon>
            </ListItemIcon>
            <ListItemText
              primary={"Settings"}
              primaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>
        </List>

      </Nav>
      <Switch>
        <Route exact path="/" component={ActiveProjects} />
        <Route exact path="/newproject" component={NewProjectForm} />
        <Route exact path="/production" component={Production} />
        <Route exact path="/testing" component={Testing}/>
        <Route exact path="/shipping" component={Shipping}/>
      </Switch>
    </Router>
  );
};

export default Navbar;