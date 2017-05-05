import React from 'react';
import { connect } from 'react-redux';
import { chooseLanguage } from '../../state/actions';

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = { imageClass: 'background-img' }
    this.findPosition = this.findPosition.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.findPosition);
  }

  findPosition() {
    let image;
    const elem = document.getElementById("header-container");
    const position = elem.getBoundingClientRect();
    image = position.top <= -109.25 ? 'background-img fixed' : image = 'background-img';
    this.setState({ imageClass: image })
  }

  render() {
    return (
      <div id="header-container">
        <div className="lang-container"><p className="lang">
          <span onClick={() => (this.props.chooseLanguage('en'))}
            className={this.props.lang === 'en' ? 'selected-lang' : ''}>EN</span> |
          <span onClick={() => (this.props.chooseLanguage('fr'))}
            className={this.props.lang === 'fr' ? 'selected-lang fr' : 'fr'}>FR</span></p>
        </div>
        <h1 className="branded-header">
          <span className="busbud">busbud</span>
          <span className="x">x</span>
          <br />
          osheaga
        </h1>
        <div className="img-container">
          <div className={this.state.imageClass}></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  lang: state.lang
});

export default connect(mapStateToProps, { chooseLanguage })(LandingPage);
