import React from 'react';
import SearchNav from './search/SearchNav';
import SearchRes from './results/SearchRes';

class SearchPage extends React.Component {
  render() {
    return (
      <div>
        <SearchNav />
        <SearchRes />
      </div>
    )
  }
}

export default SearchPage;
