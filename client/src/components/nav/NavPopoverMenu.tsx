import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { Page } from "../../models/page";
import { NavLink } from "react-router-dom";

interface Props {
  anchorElNav: (EventTarget & HTMLButtonElement) | null;
  onClose: () => void;
  pages: Page[];
}

export const NavPopoverMenu = (props: Props) => {
  const { anchorElNav, onClose, pages } = props;
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={Boolean(anchorElNav)}
      onClose={onClose}
      sx={{
        display: { xs: "block", md: "none" },
      }}
    >
      {pages.map((page) => (
        <NavLink
          to={page.path}
          key={page.title}
          style={{ textDecoration: "none" }}
        >
          <MenuItem onClick={onClose}>
            <Typography textAlign="center">{page.title}</Typography>
          </MenuItem>
        </NavLink>
      ))}
    </Menu>
  );
};
