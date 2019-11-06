import React from 'react';
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
  Send
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
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import Homelink from '../pages/Home';

const Navbar = () => {
  return (
    <Router>
      <Nav renderIcon={collapsed => collapsed ? <ChevronRight /> : <ChevronLeft />}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <Icon>
                <Home />
              </Icon>
            </ListItemIcon>
            <Link to="/homelink" style={{ textDecoration: 'none' }}>
              <ListItemText
                primary={"Home"}
                primaryTypographyProps={{ noWrap: true }}
              />
            </Link>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Icon>
                <Home />
              </Icon>
            </ListItemIcon>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <ListItemText
                primary={"About"}
                primaryTypographyProps={{ noWrap: true }}
              />
            </Link>
          </ListItem>

          <ListItem button disabled="true">
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
      </Switch>
    </Router>
  );
};

export default Navbar;