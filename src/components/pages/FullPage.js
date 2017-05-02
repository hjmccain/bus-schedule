import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../state/actions';
import LandingPage from './LandingPage';
import SearchPage from './SearchPage';
import '../../style/index.css';

class FullPage extends React.Component {
  // componentWillMount() {
  //   this.props.getData();
  // }

  render() {
    return (
      <div>
        <LandingPage />
        <SearchPage />
      </div>
    )
  }
}

const mapStateToProps = state => ({ data: state.data });

export default connect(mapStateToProps, { getData })(FullPage);
