import React from "react";
import { AddCalendarMonth, AddCalendarDay } from "./calendar.styles";

export class TodoCalendar extends React.Component<{}, {date: Date}>{
    constructor(props: {}) {
        super(props);

        this.state = {
          date: new Date(),
        }
    }

    render(){
        const { date } = this.state;
        return (
            <><AddCalendarMonth>{date.toLocaleString("en-US", { month: 'short'}).toUpperCase()}</AddCalendarMonth><AddCalendarDay>{date.toLocaleString("en-US", { day: '2-digit'})}</AddCalendarDay></>
        );
    }
}