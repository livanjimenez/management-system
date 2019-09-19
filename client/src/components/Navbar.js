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

const Navbar = () => {
  return (
    <div>
      <Nav renderIcon={collapsed => collapsed ? <ChevronRight /> : <ChevronLeft />}>
        <h3>General Title</h3>
        <Divider />
        <List>
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