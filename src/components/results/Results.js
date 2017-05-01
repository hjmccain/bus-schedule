import React from 'react';
import SingleResult from './SingleResult';

const Results = (props) => {
  return (
    <div className="results-body">
      <SingleResult className="result-line" />
      <SingleResult className="result-line" />
      <SingleResult className="result-line" />
    </div>
  )
}

export default Results;
