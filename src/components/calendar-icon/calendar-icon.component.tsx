import React from "react";
import { Day, Month, Time } from "./calendar-icon.styles";

const CalendarIcon = () => {
  const date = new Date();
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  const day = date.toLocaleDateString('en-US', { day: 'numeric' });

  return (
    <Time>
      <Month>{month.toUpperCase()}</Month>
      <Day>{day}</Day>
    </Time>
  );
};

export default CalendarIcon;