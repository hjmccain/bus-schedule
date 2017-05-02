import React from 'react';

class SearchBar extends React.Component {
  handleClick() {
    this.props.label === 'departing' ?
    this.props.toggleVisibility(!this.props.calVisible) : this.props.toggleVisibility(false)
  }

  sendInput() {
    if (this.props.label === 'from') {
      this.props.collectInput(this.textInput.value);
    }
  }

  render() {
    return (
      <div className="search-nav-child">
        <div className="search-nav-child">
          <p>{this.props.label}</p>
          <input
            ref={input => this.textInput = input}
            onFocus={this.handleClick.bind(this)}
            onChange={this.sendInput.bind(this)}
            value={this.props.content}
            className="search-bar" />
        </div>
      </div>
    )
  }

}

export default SearchBar;
