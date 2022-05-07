import Box from "@mui/material/Box";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const PageContent = (props: Props) => {
  const { children } = props;

  return <Box sx={{ height: "100vh", m: 2 }}>{children}</Box>;
};
