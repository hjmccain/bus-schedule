import React from 'react';
import SearchBar from './SearchBar';
import Calendar from './Calendar';
import moment from 'moment';

class SearchNav extends React.Component {
  state = {
    calVisible: false,
    isoDate: '2017-07-29',
    destination: null,
    displayDate: ''
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
        <h2>
          {this.props.lang === 'en' ? 'you’re going to' : 'vous allez à'}
          <span className="montreal">montréal</span>!
        </h2>
        <form>
          <SearchBar
            collectInput={this.collectInput.bind(this)}
            toggleVisibility={this.toggleVisibility.bind(this)}
            label="from" />
          <SearchBar
            class="search-bar date-bar"
            content={this.state.displayDate.toString() || "July 29"}
            toggleVisibility={this.toggleVisibility.bind(this)}
            calVisible={this.state.calVisible}
            label="departing" />
          <div className="search-nav-child">
            <button className={this.props.lang} onClick={this.sendData.bind(this)}>
              {this.props.lang === 'en' ? 'Find my ticket!' : 'Recherchez mon billet!'}
            </button>
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
