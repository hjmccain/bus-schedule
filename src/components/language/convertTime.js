const convertTime = (time) => {
  const am = /am/;
  const pm = /pm/;
  let convertedTime;

  const conversion = (time, regex, convert24) => {
    let index = regex.exec(time).index;
    let trimmed = time.slice(0, index);
    let timeAry = trimmed.split(':');
    if (convert24) { timeAry[0] = (parseInt(timeAry[0], 10) + 12).toString() }
    convertedTime = timeAry.join('h');
  }

  if (am.exec(time)) {
    conversion(time, am, false)
  } else {
    conversion(time, pm, true)
  }

  return convertedTime;
}

export default convertTime;
