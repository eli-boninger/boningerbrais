import React from "react";
import Button from "@mui/material/Button";

interface Props {
  pages: string[];
  onClose: () => void;
}
export const NavButtonMenu = (props: Props) => {
  const { pages, onClose } = props;
  return (
    <>
      {pages.map((page) => (
        <Button
          key={page}
          variant="text"
          color="secondary"
          onClick={onClose}
          sx={{ my: 2, display: "block" }}
        >
          {page}
        </Button>
      ))}
    </>
  );
};
