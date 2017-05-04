import React from 'react';

class SearchBar extends React.Component {
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
            onChange={this.sendInput.bind(this)}
            value={this.props.content || "New York City"}
            className={this.props.class || "search-bar"} />
        </div>
      </div>
    )
  }

}

export default SearchBar;
