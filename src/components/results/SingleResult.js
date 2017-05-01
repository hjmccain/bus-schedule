import React from 'react';

const SingleResult = (props) => {
  return (
    <div className="single-result">
      <div className="result-element price"><p>{'$100'}</p></div>
      <div className="result-element itinerary">
        <div className="carrier">
          <p>{'Megabus'}</p>
        </div>
        <div className="depart">
          <p>
            <span>Depart</span>
            <span>{'12:30pm'}</span>
            <span>{'Chicago Transportation Center'}</span>
          </p>
        </div>
        <div className="arrive">
          <p>
            <span>Arrive</span>
            <span>{'11:10pm'}</span>
            <span>{'Métro - Centre Ville'}</span>
          </p>
        </div>
      </div>
      <div className="result-element more-info">
        <button>details</button>
      </div>
    </div>
  )
}

export default SingleResult;
