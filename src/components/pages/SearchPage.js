import React from 'react';
import SearchNav from '../search/SearchNav';
import Results from '../results/Results';
import { connect } from 'react-redux';
import { getData, fetchResults } from '../../state/actions';

const SearchPage = (props) => {
  const dateAndLocation = (object) => {
    props.getData(object.isoDate);
    props.fetchResults();
  }

  return (
    <div className="search-page">
      <SearchNav
        dateAndLocation={dateAndLocation}
        fetchingResults={!props.fetchingResults ? 'spinner-container hidden' : 'spinner-container'} />
      <Results results={props.results ? props.results : null} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  results: state.data,
  fetchingResults: state.fetchingResults
});

export default connect(mapStateToProps, { getData, fetchResults })(SearchPage);
