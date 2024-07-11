"use client";

import React from "react";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
// import Header from './header';
import Nav from "@/sections/header/nav";

type Props = {
  children: React.ReactNode;
};

export default function AppMainLayout({ children }: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <Nav>
      {children}
      </Nav>

    </Box>
  );
}
