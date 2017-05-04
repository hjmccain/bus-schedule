import React from 'react';
import DayPicker from "react-day-picker";

class Calendar extends React.Component {
  state = { disabledDates: [] };

  componentWillMount() {
    let datesArray = [];
    for (let i = 7; i <= 31; i++) {
      datesArray.push(new Date(2017, 7, i))
    }
    this.setState({ disabledDates: datesArray });
    document.addEventListener('click', this.handleClick.bind(this), false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick.bind(this), false);
  }

  handleClick(e) {
    e.target.classList.contains('date-bar') ||
    e.target.classList.contains('DayPicker-Caption') ||
    e.target.classList.contains('DayPicker-NavButton') ?
    this.props.toggleVisibility(true) : this.props.toggleVisibility(false)
  }

  handleDayClick = (day) => {
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
          initialMonth={new Date(2017, 6)}
          selectedDays={new Date(2017, 6, 29)}
          fromMonth={new Date(2017, 6)}
          toMonth={new Date(2017, 7)}
          disabledDays={this.state.disabledDates}
          onDayClick={this.handleDayClick}
          />
      </div>
    )
  }
}

export default Calendar;
