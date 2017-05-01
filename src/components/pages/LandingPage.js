import React from 'react';
import background from '../../../public/cropped-background.png';

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      elem: ''
    }
    this.state = { headerClass: 'branded-header', imageClass: 'background-img' }
    this.findPosition = this.findPosition.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.findPosition);
  }

  findPosition() {
    let header, image;
    const elem = document.getElementById("header-container");
    const position = elem.getBoundingClientRect();
    if (position.top <= -17) {
      // header = 'branded-header fixed'
      image = 'background-img fixed'
    } else {
      // header = 'branded-header'
      image = 'background-img'
    }
    this.setState({ imageClass: image })
  }

  render() {
    return (
      <div id="header-container">
        <h1 className={this.state.headerClass}>
          busbud
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

export default LandingPage;
