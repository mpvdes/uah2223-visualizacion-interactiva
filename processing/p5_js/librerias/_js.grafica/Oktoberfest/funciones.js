
function getExactDate(year, month, day) {
  var leapYear = false;

  if (year % 400 === 0) {
    leapYear = true;
  } else if (year % 100 === 0) {
    leapYear = false;
  } else if (year % 4 === 0) {
    leapYear = true;
  }

  if (leapYear) {
    return year + (month + (day - 1) / daysPerMonthLeapYear[month]) / 12;
  } else {
    return year + (month + (day - 1) / daysPerMonth[month]) / 12;
  }
}
