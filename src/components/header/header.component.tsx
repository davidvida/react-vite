import React from "react";
import CalendarIcon from "../calendar-icon/calendar-icon-component";
import Title from "../title/title-component";
import { Wrapper } from "./header-style";

const Header = () => {
  return (
    <Wrapper>
      <CalendarIcon />
      <Title />
    </Wrapper>
  )
};

export default Header;

