import React from 'react';
import convertDate from '../language/convertDate';

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
            value={
              this.props.lang === 'en' ?
              this.props.content || "New York City" :
              this.props.content ? convertDate(this.props.content) : "New York City"
            }
            className={this.props.class || "search-bar"} />
        </div>
      </div>
    )
  }

}

export default SearchBar;
