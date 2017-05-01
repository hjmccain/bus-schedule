import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <p>{props.label}</p>
      <input placeholder={props.text}/>
    </div>
  )
}

export default SearchBar;
