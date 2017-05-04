import React from 'react';
import SingleResult from './SingleResult';
import SortResults from './SortResults';
import uuidV4 from 'uuid/v4';

const Results = (props) => {
  if (props.results) {
    if (props.results === 'No results') {
      return <div className="no-results">
        {
          props.lang === 'en' ?
          'Whoops! Sorry. We couldn\'t find any results for those dates.' :
          'Oups! Pardon, nous n\'avons pas trouvé aucun resultat pour ces dates.'
        }
      </div>
    }
    return (
      <div>
        <SortResults date={props.date} getData={props.getData} />
        <div className="results-body">
          {props.results.map(object => {
            return <SingleResult
              key={uuidV4()}
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
  } else if (props.getDataError) {
    return (
      <div className="no-results">
        {
          props.lang === 'en' ?
          'Whoops! That\'s embarrassing. It looks like there\'s been an error.' :
          'Oups! Excusez nous. Il semble qu\'il y ait eu une erreur.'
        }
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Results;
