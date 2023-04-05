import React from "react";
import { ItemProps } from "../../types/todo-item";
import { AddText, Wrapper } from "./header.styles";
import { TodoCalendar } from "../todo-calendar/todo-calendar.component"

type Props = {
  dataLength: number;
}

const Header = ({dataLength}: Props) => <Wrapper><TodoCalendar/>
<AddText>Today ({dataLength})</AddText></Wrapper>;

export default Header;

