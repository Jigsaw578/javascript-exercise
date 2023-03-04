function leapYears(year) {
  if (!year) {
    return
  }
  if (year%4 == 0) {
    if (year%100 == 0) {
      if (year%400 == 0) {
        return true
      }
      return false
    }
    return true
  }
  else return false
}
console.log(leapYears(1800)); 
console.log(leapYears(1600)); 
console.log(leapYears(1984)); 