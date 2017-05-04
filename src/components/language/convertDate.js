const convertDate = (string) => {
  const ary = string.split(' ');
  ary[0] === 'July' ? ary[0] = 'Juillet' : ary[0] = 'Août';
  return `${ary[1]} ${ary[0]}`;
}

export default convertDate;
