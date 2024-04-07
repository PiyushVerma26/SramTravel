export function getMonth(month, shortForm = false) {
  const monthNames = [
    ['January', 'Jan'],
    ['February', 'Feb'],
    ['March', 'Mar'],
    ['April', 'Apr'],
    ['May', 'May'],
    ['June', 'Jun'],
    ['July', 'Jul'],
    ['August', 'Aug'],
    ['September', 'Sep'],
    ['October', 'Oct'],
    ['November', 'Nov'],
    ['December', 'Dec'],
  ]

  if (month >= 0 && month <= 11) {
    return shortForm ? monthNames[month][1] : monthNames[month][0]
  } else {
    return 'Invalid month'
  }
}
