import React from 'react';
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import {
  Nav
} from 'mui-layout';

const Navbar = () => {
  return (
    <div>
      <Nav
        renderIcon={collapsed => collapsed ? <ChevronRight /> : <ChevronLeft />}
      >
        Nav is here!
      </Nav>
    </div>
  );
};

export default Navbar;