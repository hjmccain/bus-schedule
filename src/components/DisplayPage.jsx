import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../state/actions';
import '../style/index.css';

class DisplayPage extends React.Component {
  componentWillMount() {
    this.props.getData();
  }

  render() {
    return <div><h1>hola mundito</h1></div>
  }
}

const mapStateToProps = state => ({ data: state.data });

export default connect(mapStateToProps, { getData })(DisplayPage);
