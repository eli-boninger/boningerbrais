import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";
import { NavPopoverMenu } from "./NavPopoverMenu";
import { NavButtonMenu } from "./NavButtonMenu";
import { Heart } from "./Heart";
import { HamburgerButton } from "./HamburgerButton";

const pages = ["Info", "Photos", "RSVP"];

export const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Heart sx={{ mr: 2, display: { xs: "none", md: "flex" } }} />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <HamburgerButton onClick={handleOpenNavMenu} />
            <NavPopoverMenu
              pages={pages}
              onClose={handleCloseNavMenu}
              anchorElNav={anchorElNav}
            />
          </Box>
          <Heart sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <NavButtonMenu pages={pages} onClose={handleCloseNavMenu} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
