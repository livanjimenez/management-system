import React from 'react';
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import {
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Icon,
} from '@material-ui/core';
import { Nav } from 'mui-layout';

// Fix icons not showing
const navbarIcons = [
  {
    primaryText: 'My Files',
    icon: 'folder'
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
      <Nav
        renderIcon={collapsed => collapsed ? <ChevronRight /> : <ChevronLeft />}
      >
        <Typography variant="h6" style={{ paddingBottom: 16 }} noWrap>
          Username
        </Typography>
        <Divider />
        {navbarIcons.map(({ primaryText, icon }, i) => (
          <List>
            <ListItem key={primaryText} selected={i === 0} button>
              <ListItemIcon>
                <Icon>{icon}</Icon>
              </ListItemIcon>
              <ListItemText
                primary={primaryText}
                primaryTypographyProps={{ noWrap: true }}
              />
            </ListItem>
          </List>
        ))}
        <Divider style={{ margin: "12px 0" }} />
        <ListItem button>
          <ListItemIcon>
            <Icon>settings</Icon>
          </ListItemIcon>
          <ListItemText
            primary={"Account"}
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
      </Nav>
    </div>
  );
};

export default Navbar;