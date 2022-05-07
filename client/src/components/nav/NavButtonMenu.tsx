import React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { Page } from "../../models/page";

interface Props {
  pages: Page[];
  onClose: () => void;
}
export const NavButtonMenu = (props: Props) => {
  const { pages, onClose } = props;
  return (
    <>
      {pages.map((page) => (
        <NavLink
          to={page.path}
          key={page.title}
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
          })}
          tabIndex={-1}
        >
          <Button
            variant="text"
            color="secondary"
            onClick={onClose}
            sx={{ my: 2, display: "block" }}
          >
            {page.title}
          </Button>
        </NavLink>
      ))}
    </>
  );
};
