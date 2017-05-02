import React from 'react';
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

class Calendar extends React.Component {
  state = {
    selectedDay: undefined
  };

  handleDayClick = (day, { selected }) => {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
    this.props.toggleVisibility(false);
    this.props.getContent(day);
  };

  render() {
    return (
      <div className={
          this.props.calVisible ?
          'calendar' : 'calendar hidden'
        }>
        <DayPicker
        onDayClick={this.handleDayClick}
      />
      </div>
    )
  }
}

export default Calendar;
