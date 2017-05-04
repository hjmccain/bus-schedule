const sorting = (array, toSort, num1, num2) => {
  return array.sort((a, b) => {
    if (a.toSort < b.toSort) {
      return num1;
    }
    if (a.toSort > b.toSort) {
      return num2;
    }
    return 0;
  });
}

export default sorting;
