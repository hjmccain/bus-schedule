import React from 'react';
import SearchNav from '../search/SearchNav';
import Results from '../results/Results';
import { connect } from 'react-redux';
import { getData } from '../../state/actions';

const SearchPage = (props) => {
  const dateAndLocation = (object) => {
    props.getData();
  }

  return (
    <div className="search-page">
      <SearchNav dateAndLocation={dateAndLocation} />
      <Results />
    </div>
  )
}

export default connect(null, { getData })(SearchPage);
