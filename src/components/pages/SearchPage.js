import React from 'react';
import SearchNav from '../search/SearchNav';
import Results from '../results/Results';

class SearchPage extends React.Component {
  render() {
    return (
      <div className="search-page">
        <SearchNav />
        <Results />
      </div>
    )
  }
}

export default SearchPage;
