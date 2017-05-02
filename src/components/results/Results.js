import React from 'react';
import SingleResult from './SingleResult';
import uuidV4 from 'uuid/v4';

const Results = (props) => {
  if (props.results) {
    if (props.results === 'No results') {
      return <div className="no-results">Whoops! Sorry. We couldn't find any results for those dates.</div>
    }
    return (
      <div className="results-body">
        {props.results.map(object => {
          return <SingleResult
            key={uuidV4()}
            className="result-line"
            price={object.showActualPrice ? `$${object.price}` : null}
            roundedPrice={`$${object.roundedPrice}`}
            carrier={object.carrier}
            depart={{city: 'New York City', time: object.departureTime, location: object.departureName}}
            arrive={{city: 'Montréal', time: object.arrivalTime, location: object.arrivalName}}
            />
        })}
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Results;
