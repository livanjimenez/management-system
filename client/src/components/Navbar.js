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
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

const list = [
  {
    primaryText: "My Files",
    icon: "folder"
  },
  {
    primaryText: "Shared with me",
    icon: "people"
  },
  {
    primaryText: "Starred",
    icon: "star"
  },
  {
    primaryText: "Recent",
    icon: "schedule"
  },
  {
    primaryText: "Offline",
    icon: "offline_pin"
  },
  {
    primaryText: "Uploads",
    icon: "publish"
  },
  {
    primaryText: "Backups",
    icon: "backup"
  },
  {
    primaryText: "Trash",
    icon: "delete"
  }
];

const Navbar = () => {
  return (
    <div>
      <Nav renderIcon={collapsed => collapsed ? <ChevronRight /> : <ChevronLeft />}>
        <h3>General Title</h3>
        <Divider />
        <List>
          {list.map(({ primaryText, icon }, i) => (
            <ListItem key={primaryText} selected={i === 0} button>
              <ListItemIcon>
                <Icon>{icon}</Icon>
              </ListItemIcon>
              <ListItemText
                primary={primaryText}
                primaryTypographyProps={{ noWrap: true }}
              />
            </ListItem>
          ))}
          <Divider style={{ margin: "12px 0" }} />
          <ListItem button>
            <ListItemIcon>
              <Icon>
                <FitnessCenterIcon />
              </Icon>
            </ListItemIcon>
            <ListItemText
              primary={"Settings & account"}
              primaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>
        </List>
      </Nav>
    </div>
  );
};

export default Navbar;