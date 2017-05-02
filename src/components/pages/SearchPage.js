import React from 'react';
import SearchNav from '../search/SearchNav';
import Results from '../results/Results';
import { connect } from 'react-redux';
import { getData } from '../../state/actions';

const SearchPage = (props) => {
  const dateAndLocation = (object) => {
    props.getData(object.isoDate);
  }

  return (
    <div className="search-page">
      <SearchNav dateAndLocation={dateAndLocation} />
      <Results
        results={props.results ? props.results : null}
        />
    </div>
  )
}

const mapStateToProps = (state) => ({
  results: state.data
});

export default connect(mapStateToProps, { getData })(SearchPage);
