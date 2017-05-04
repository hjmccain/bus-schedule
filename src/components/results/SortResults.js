import React from 'react';
import sorting from './sorting';

const SortResults = (props) => {

  const setSort = (array, toSort, num1, num2) => {
    let sorted = sorting(array, toSort, num1, num2);
    console.log(sorted);
    props.setRes(sorted);
  }

  return (
    <div>
      <p>
        <span>Currency:
          <span onClick={() => {props.getData(props.date, 'USD')}}>USD</span> |
          <span onClick={() => {props.getData(props.date, 'CAD')}}>CAD</span>
        </span>
        <span>Sort price:
          <span onClick={() => {setSort(props.results, 'price', -1, 1)}}>Low</span> |
          <span onClick={() => {setSort(props.results, 'price', 1, -1)}}>High</span>
        </span>
      </p>
    </div>
  )
}

export default SortResults;
