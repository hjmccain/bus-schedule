import React from 'react';
import NoResults from './NoResults';
import ResultsSuccess from './ResultsSuccess';
import ResultsError from './ResultsError';


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
        return <NoResults lang={this.props.lang}/>
      }
      return <ResultsSuccess
        lang={this.props.lang}
        showModal={this.showModal.bind(this)}
        date={this.props.date}
        getData={this.props.getData}
        results={this.props.results}
        className={this.state.showModal}/>
    } else if (this.props.getDataError) {
      return <ResultsError lang={this.props.lang} />
    } else {
      return <div></div>
    }
  }

}

export default Results;
