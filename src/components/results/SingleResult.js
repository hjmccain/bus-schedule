import React from 'react';

const SingleResult = (props) => {
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
            <span>
              {
                props.lang === 'en' ?
                'Depart' : 'Départ'
              }
            </span>
            <span className="time">{props.depart.time}</span>
            <span className="location">{props.depart.location}</span>
          </p>
          <i className="fa fa-arrow-down" aria-hidden="true"></i>
        </div>
        <div className="arrive">
          <p>
            <span>
              {
                props.lang === 'en' ?
                'Arrive' : 'Arrivée'
              }
            </span>
            <span className="time">{props.arrive.time}</span>
            <span className="location">{props.arrive.location}</span>
          </p>
        </div>
      </div>
      <div className="result-element more-info">
        <button>
          {
            props.lang === 'en' ?
            'Purchase' : 'Achetez'
          }
        </button>
      </div>
    </div>
  )
}

export default SingleResult;
