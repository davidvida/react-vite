import React from "react";
import { months } from "../../data/months";
import { CalendarMonth, CalendarDay } from "./calendar-icon-style";
import { Stack } from "@mui/material";

const date = new Date();

const CalendarIcon = () => {
    return (
        <Stack direction="column">
            <CalendarMonth> {months[date.getMonth()]} </CalendarMonth>
            <CalendarDay> {date.getDate()} </CalendarDay>
        </Stack>
    );
}

export default CalendarIcon;