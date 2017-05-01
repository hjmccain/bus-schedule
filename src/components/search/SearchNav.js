import React from 'react';
import SearchBar from './SearchBar';

class SearchNav extends React.Component {
  render() {
    return (
      <div className="search-nav">
        <h2>you’re going to montréal!</h2>
        <SearchBar
          label="from"
          text="Chicago" />
        <SearchBar
          label="departing"
          text="July 29" />
      </div>
    )
  }
}

export default SearchNav;
