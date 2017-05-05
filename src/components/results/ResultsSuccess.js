import React from 'react';
import SortResults from './SortResults';
import ThanksModal from './ThanksModal';
import SingleResult from './SingleResult';
import uuidV4 from 'uuid/v4';

const ResultsSuccess = (props) => {

  return (
    <div>
      <SortResults date={props.date} getData={props.getData} />
      <ThanksModal className={props.className}/>
      <div className="results-body" id="thanks">
        {props.results.map(object => {
          return <SingleResult
            key={uuidV4()}
            showModal={props.showModal}
            lang={props.lang}
            className="result-line"
            price={object.showActualPrice ? `$${object.price}` : null}
            roundedPrice={`$${object.roundedPrice}`}
            carrier={object.carrier}
            depart={{city: 'New York City', time: object.departureTime, location: object.departureName}}
            arrive={{city: 'Montréal', time: object.arrivalTime, location: object.arrivalName}}
            />
        })}
      </div>
    </div>
  )

}

export default ResultsSuccess;
