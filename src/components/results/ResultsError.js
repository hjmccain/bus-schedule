import React from 'react';

const ResultsError = (props) => {
  return (
    <div className="no-results">
      {
        props.lang === 'en' ?
        'Whoops! That\'s embarrassing. It looks like there\'s been an error.' :
        'Oups! Excusez nous. Il semble qu\'il y ait eu une erreur.'
      }
    </div>
  )
}

export default ResultsError;
