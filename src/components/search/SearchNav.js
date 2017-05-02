import React from 'react';
import SearchBar from './SearchBar';
import Calendar from './Calendar';
import moment from 'moment';

class SearchNav extends React.Component {
  state = {
    calVisible: false,
    isoDate: '2017-07-29',
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
        <h2>you’re going to <span className="montreal">montréal</span>!</h2>
        <form>
          <SearchBar
            content="New York City"
            collectInput={this.collectInput.bind(this)}
            toggleVisibility={this.toggleVisibility.bind(this)}
            label="from" />
          <SearchBar
            content={this.state.displayDate.toString() || "July 29"}
            toggleVisibility={this.toggleVisibility.bind(this)}
            calVisible={this.state.calVisible}
            label="departing" />
          <div className="search-nav-child">
            <button onClick={this.sendData.bind(this)}>Find my ticket!</button>
          </div>
        </form>
        <Calendar
          getContent={this.getContent.bind(this)}
          toggleVisibility={this.toggleVisibility.bind(this)}
          calVisible={this.state.calVisible} />
        <div className={this.props.fetchingResults}>
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchNav;
