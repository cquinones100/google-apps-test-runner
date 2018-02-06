function it(title, callback) {
  var group = new Group(title, callback)
  var message = '\n\n' + title

  group.results.forEach(function(result) {
    message += '\n' + result.message
  })

  var passingTests = group.results.filter(function(test) {
    return test.status === 'PASS'
  })

  Logger.log(message + '\n' + passingTests.length + ' / ' + group.results.length + ' passed\n\n')
}
