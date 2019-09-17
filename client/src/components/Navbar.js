import React from 'react';
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import {
  Icon,
} from '@material-ui/core';
import { Nav } from 'mui-layout';

const Navbar = () => {
  return(
    <div>
      <Nav renderIcon={collapsed => collapsed ? <ChevronRight /> : <ChevronLeft />}>
        <Icon>add_circle</Icon>
      </Nav>
    </div>
  );
};

export default Navbar;