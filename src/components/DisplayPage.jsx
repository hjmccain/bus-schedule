import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../state/actions';

class DisplayPage extends React.Component {
  componentWillMount() {
    this.props.getData();
  }

  render() {
    return <div>hola mundito</div>
  }
}

export default connect(null, { getData })(DisplayPage);
