import React from 'react';
import SingleResult from './SingleResult';
import SortResults from './SortResults';
import ThanksModal from './ThanksModal';
import uuidV4 from 'uuid/v4';

class Results extends React.Component {
  constructor() {
    super();
    this.state = { showModal: false }
  }

  showModal(boolean) {
    this.setState({ showModal: boolean })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.findPosition.bind(this));
    document.addEventListener('click', this.handleClick.bind(this), false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.findPosition.bind(this));
    document.removeEventListener('click', this.handleClick.bind(this), false);
  }

  handleClick(e) {
    e.target.classList.contains('show-modal') ||
    e.target.classList.contains('purchase') ?
    this.setState({ showModal: true }) : this.setState({ showModal: false })
  }

  findPosition() {
    if (document.getElementById("thanks")) {
      const elem = document.getElementById("thanks");
      const position = elem.getBoundingClientRect();
      const show = (position.top >= 459.6875) ? false : this.state.showModal;
      this.setState({ showModal: show });
    }
  }

  render() {
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
          <SortResults date={this.props.date} getData={this.props.getData} />
          <ThanksModal className={this.state.showModal}/>
          <div className="results-body" id="thanks">
            {this.props.results.map(object => {
              return <SingleResult
                key={uuidV4()}
                showModal={this.showModal.bind(this)}
                lang={this.props.lang}
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
