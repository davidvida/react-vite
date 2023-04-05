import React from "react";
import { ItemProps } from "../../types/todo-item";
import {
  Wrapper,
  Calendar,
  CalendarTitle,
  CalendarNumber,
  Title,
} from "./header.styles";

type Props = {
  dataLength: number;
}

const Header = ({ dataLength }: Props) => {
  return (
    <Wrapper>
      <Calendar>
        <CalendarTitle>
          <span className="month">May</span>
        </CalendarTitle>
        <CalendarNumber>
          <span className="number">23</span>
        </CalendarNumber>
      </Calendar>
      <Title>Today</Title>
    </Wrapper>
  );
};

export default Header;

