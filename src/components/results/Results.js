import React from 'react';
import SingleResult from './SingleResult';
import SortResults from './SortResults';
import uuidV4 from 'uuid/v4';

class Results extends React.Component {
  constructor() {
    super();
    this.state = { res: null }
    this.createResult = this.createResult.bind(this);
  }

  setRes(ary) { this.setState({ res: ary })}

  createResult(object) {
    return <SingleResult
      key={uuidV4()}
      lang={this.props.lang}
      className="result-line"
      price={object.showActualPrice ? `$${object.price}` : null}
      roundedPrice={`$${object.roundedPrice}`}
      carrier={object.carrier}
      depart={{city: 'New York City', time: object.departureTime, location: object.departureName}}
      arrive={{city: 'Montréal', time: object.arrivalTime, location: object.arrivalName}}
      />
  }

  render() {
    console.log(this.state);
    if (this.props.results) {
      if (this.props.results === 'No results') {
        return <div className="no-results">
          {
            this.props.lang === 'en' ?
            'Whoops! Sorry. We couldn\'t find any results for those dates.' :
            'Oups! Pardon, nous n\'avons pas trouvé aucun resultat pour ces dates.'
          }
        </div>
      }
      return (
        <div>
          <SortResults
            results={this.state.res || this.props.results}
            setRes={this.setRes.bind(this)}
            date={this.props.date}
            getData={this.props.getData} />
          <div className="results-body">{
            this.state.res ?
              this.state.res.map(object => this.createResult(object)) :
              this.props.results.map(object => this.createResult(object))
            }</div>
        </div>
      )
    } else if (this.props.getDataError) {
      return (
        <div className="no-results">
          {
            this.props.lang === 'en' ?
            'Whoops! That\'s embarrassing. It looks like there\'s been an error.' :
            'Oups! Excusez nous. Il semble qu\'il y ait eu une erreur.'
          }
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

export default Results;
