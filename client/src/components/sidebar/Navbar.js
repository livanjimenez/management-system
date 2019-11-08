import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  ChevronLeft,
  ChevronRight,
  PlaylistAddCheck,
  LocalShipping,
  Build,
  Home,
  Assessment,
  FolderOpen,
  Settings,
  Send,
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
import Homelink from '../pages/Home';
import ActiveProjects from '../pages/ActiveProjects';
import NewProjectForm from '../pages/NewProject.Forms';

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
          <Link to="/homelink" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <Icon>
                  <Home />
                </Icon>
              </ListItemIcon>
              <ListItemText
                primary={"Home"}
                primaryTypographyProps={{ noWrap: true }}
              />
            </ListItem>
          </Link>

          <Link to="/activeprojects" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <Icon>
                  <FolderOpen />
                </Icon>
              </ListItemIcon>
              <ListItemText
                primary={"Active Projects"}
                primaryTypographyProps={{ noWrap: true }}
              />
            </ListItem>
          </Link>

          <Link to="/newproject" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <Icon>
                  <AddCircle />
                </Icon>
              </ListItemIcon>
              <ListItemText
                primary={"Create New Project"}
                primaryTypographyProps={{ noWrap: true }}
              />
            </ListItem>
          </Link>

          <ListItem button disabled="true">
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

          <ListItem button disabled="true">
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

          <ListItem button disabled="true">
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
              <Icon>
                <Send />
              </Icon>
            </ListItemIcon>
            <ListItemText
              primary={"Send To"}
              primaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>

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
        <Route exact path="/homelink" component={Homelink} />
        <Route path="/activeprojects" component={ActiveProjects} />
        <Route path="/newproject" component={NewProjectForm} />
      </Switch>
    </Router>
  );
};

export default Navbar;