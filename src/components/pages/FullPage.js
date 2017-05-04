import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../state/actions';
import LandingPage from './LandingPage';
import SearchPage from './SearchPage';
import '../../style/index.css';

const FullPage = () => {
  return (
    <div>
      <LandingPage />
      <SearchPage />
    </div>
  )
}

export default FullPage;
