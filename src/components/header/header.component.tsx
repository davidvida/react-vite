import React from "react";
import CalendarIcon from "../calendar-icon/calendar-icon-component";
import { Stack } from "@mui/material";
import Title from "../title/title-component";

const Header = () => {
  return (
    <Stack direction="row" alignItems="center" marginTop="30px" marginBottom="32px">
      <CalendarIcon />
      <Title />
    </Stack>
  )
};

export default Header;

