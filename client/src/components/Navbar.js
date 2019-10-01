import React from 'react';
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Icon,
} from '@material-ui/core';
import { Nav } from 'mui-layout';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import HomeIcon from '@material-ui/icons/Home';
import FolderIcon from '@material-ui/icons/FolderOutlined';

const Navbar = () => {
  return (
    <div>
      <Nav renderIcon={collapsed => collapsed ? <ChevronRight /> : <ChevronLeft />}>
        <h3>Username</h3>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Icon>
                <HomeIcon />
              </Icon>
            </ListItemIcon>
            <ListItemText
              primary={"Home"}
              primaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Icon>
                <FolderIcon />
              </Icon>
            </ListItemIcon>
            <ListItemText
              primary={"Active Projects"}
              primaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>

          <Divider style={{ margin: "12px 0" }} />
          <ListItem button>
            <ListItemIcon>
              <Icon >
                <SettingsApplicationsIcon />
              </Icon>
            </ListItemIcon>
            <ListItemText
              primary={"Settings"}
              primaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>
        </List>
      </Nav>
    </div>
  );
};

export default Navbar;