import React from "react";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton, SxProps, Theme } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  sx?: SxProps<Theme>;
}

export const Heart = (props: Props) => {
  const { sx } = props;
  const navigate = useNavigate();
  return (
    <Typography variant="h6" noWrap component="div" color="primary" sx={sx}>
      <IconButton color="inherit" onClick={() => navigate("/")}>
        <FavoriteIcon />
      </IconButton>
    </Typography>
  );
};
