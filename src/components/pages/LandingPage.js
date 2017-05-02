import React from 'react';

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
    console.log(position);
    this.setState({ imageClass: image })
  }

  render() {
    return (
      <div id="header-container">
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

export default LandingPage;
