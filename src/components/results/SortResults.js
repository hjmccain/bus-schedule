import React from 'react';

const SortResults = (props) => {
  return (
    <div>
      <p>
        <span>Currency:
          <span onClick={() => {props.getData(props.date, 'USD')}}>USD</span> |
          <span onClick={() => {props.getData(props.date, 'CAD')}}>CAD</span>
        </span>
        <span>Sort price:
          <span>Low</span> |
          <span>High</span>
        </span>
      </p>
    </div>
  )
}

export default SortResults;
