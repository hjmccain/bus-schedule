import React from 'react';
import Results from './Results';
import ResultsHeader from './ResultsHeader';

const ResultsTable = (props) => {
  return (
    <div>
      <ResultsHeader />
      <Results />
    </div>
  )
}

export default ResultsTable;
