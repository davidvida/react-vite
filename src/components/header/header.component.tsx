import React from "react";
import { ItemProps } from "../../types/todo-item";
import { TodayText, Wrapper } from "./header.styles";
import CalendarIcon from "../calendar-icon/calendar-icon.component";

const Header = () =>
  <Wrapper>
    <CalendarIcon />
    <TodayText>Today</TodayText>
  </Wrapper>;

export default Header;

