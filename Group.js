function Group(title, callback) {
  this.results = []

  this.expect = function(variable) {
    var result = new Expectation(this, variable)
    return result
  }

  callback.bind(this)()
}
