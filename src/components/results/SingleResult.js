import React from 'react';

const SingleResult = (props) => {
  console.log('single result', props)
  return (
    <div className="single-result">
      <div className="result-element price">
        <p>{props.roundedPrice}</p>
        <p className="actual-price">{props.price}</p>
      </div>
      <div className="result-element itinerary">
        <div className="carrier">
          <p>{props.carrier}</p>
        </div>
        <div className="depart">
          <p>
            <span>Depart</span>
            <span className="time">{props.depart.time}</span>
            <span>{props.depart.location}</span>
          </p>
        </div>
        <div className="arrive">
          <p>
            <span>Arrive</span>
            <span className="time">{props.arrive.time}</span>
            <span>{props.arrive.location}</span>
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
