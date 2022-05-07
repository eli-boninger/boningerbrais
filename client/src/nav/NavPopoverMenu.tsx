import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

interface Props {
  anchorElNav: (EventTarget & HTMLButtonElement) | null;
  onClose: () => void;
  pages: string[];
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
        <MenuItem key={page} onClick={onClose}>
          <Typography textAlign="center">{page}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};
