import React from 'react';
import convertDate from '../language/convertDate';

const SearchBar = (props) => {
  return (
    <div className="search-nav-child">
      <div className="search-nav-child">
        <p>{props.label}</p>
        <input
          readOnly={true}
          value={
            props.lang === 'en' ?
            props.content || "New York City" :
            props.content ? convertDate(props.content) : "New York City"
          }
          className={props.class || "search-bar"} />
      </div>
    </div>
  )
}

export default SearchBar;
