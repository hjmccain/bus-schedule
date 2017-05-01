import React from 'react';

const Header = (props) => {

  const classDefiner = (state) => {
    let className;
    if (state === null) {
      className = "fa fa-sort";
    } else if (state === false) {
      className = "fa fa-caret-up"
    } else {
      className = "fa fa-caret-down"
    }
    return className;
  }

  return (
    <div className="table-header">Table Header!</div>
  )
}

export default Header;
