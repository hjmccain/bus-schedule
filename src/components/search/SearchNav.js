import React from 'react';
import SearchBar from './SearchBar';
import Calendar from './Calendar';
import moment from 'moment';

class SearchNav extends React.Component {
  state = {
    calVisible: false,
    isoDate: null,
    destination: null,
    displayDate: '',
  }

  toggleVisibility(show) { this.setState({ calVisible: show }) }
  collectInput(input) { this.setState({ destination: input }) }


  getContent(date) {
    this.setState({
      isoDate: moment(date).format('YYYY-MM-DD'),
      displayDate: moment(date).format('MMMM D') });
  }

  sendData(e) {
    e.preventDefault();
    const { isoDate, destination } = this.state;
    this.props.dateAndLocation({isoDate: isoDate, destination: destination});
  }

  render() {
    return (
      <div className="search-nav">
        <h2>you’re going to montréal!</h2>
        <form>
          <SearchBar
            collectInput={this.collectInput.bind(this)}
            toggleVisibility={this.toggleVisibility.bind(this)}
            label="from"
            text="Chicago" />
          <SearchBar
            content={this.state.displayDate.toString()}
            toggleVisibility={this.toggleVisibility.bind(this)}
            calVisible={this.state.calVisible}
            label="departing"
            text="July 29" />
          <div className="search-nav-child">
            <button onClick={this.sendData.bind(this)}>Find my ticket!</button>
          </div>
        </form>
        <Calendar
          getContent={this.getContent.bind(this)}
          toggleVisibility={this.toggleVisibility.bind(this)}
          calVisible={this.state.calVisible} />
      </div>
    )
  }
}

export default SearchNav;
