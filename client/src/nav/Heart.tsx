import React from "react";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { SxProps, Theme } from "@mui/material";

interface Props {
  sx?: SxProps<Theme>;
}

export const Heart = (props: Props) => {
  const { sx } = props;
  return (
    <Typography variant="h6" noWrap component="div" color="primary" sx={sx}>
      <FavoriteIcon />
    </Typography>
  );
};
