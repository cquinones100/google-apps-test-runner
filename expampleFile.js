function printData(data) {
  var name

  return data.reduce(function(acc, curr, index) {
    if (isANameRow(curr)) {
      name = curr[1]
      return acc
    }
    if (isADateRow(curr)) {
      var array = [
        name, curr[2], curr[0], curr[3], curr[4], curr[5],
        overTenHours(curr[5]), underThreeHours(curr[5]), tookABreak(6), curr[9]
      ]
      acc.push(array)
    }
    return acc
  }, []);
}

function isANameRow(row) {
  return (row[0] === '' && row[1] !== 'Signature' && row[1] !== '')
}

function isADateRow(row) {
  return (row[0] instanceof Date)
}

function setName(name) {
  return [name];
}

function overTenHours(hours) {
  return (hours > 10.0)
}

function underThreeHours(hours) {
  return (hours < 3.0)
}

function tookABreak(data) {
  return data !== 0
}
