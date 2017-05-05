import React from 'react';
import SearchNav from '../search/SearchNav';
import Results from '../results/Results';
import { connect } from 'react-redux';
import { getData, fetchResults } from '../../state/actions';

class SearchPage extends React.Component {
  state = { date: '' }

  dateAndLocation(object) {
    this.setState({ date: object.isoDate })
    this.props.getData(object.isoDate, 'USD');
  }

  render() {
    return (
      <div className="search-page">
        <SearchNav
          lang={this.props.lang}
          dateAndLocation={this.dateAndLocation.bind(this)}
          fetchingResults={!this.props.fetchingResults ? 'spinner-container hidden' : 'spinner-container'} />
        <Results
          date={this.state.date}
          getData={this.props.getData}
          err={this.props.getDataError}
          lang={this.props.lang}
          results={this.props.results ? this.props.results : null} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  results: state.data,
  fetchingResults: state.fetchingResults,
  lang: state.lang,
  getDataError: state.getDataError
});

export default connect(mapStateToProps, { getData, fetchResults })(SearchPage);
