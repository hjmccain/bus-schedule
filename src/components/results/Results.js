import React from 'react';
import SingleResult from './SingleResult';
import uuidV4 from 'uuid/v4';

const Results = (props) => {
  console.log(props);
  if (props.results) {
    return (
      <div className="results-body">
        {props.results.map(object => {
          console.log(object.carrier);
          return <SingleResult
            key={uuidV4()}
            className="result-line"
            price={`$${object.price}`}
            carrier={object.carrier}
            depart={{city: 'New York City', time: object.departureTime, location: object.departureName}}
            arrive={{city: 'Montréal', time: object.arrivalTime, location: object.arrivalName}}
            />
        })}
      </div>
    )
  } else {
    return <div>No results</div>
  }
}

export default Results;
