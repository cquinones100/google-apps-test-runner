function Expectation(parent, variable) {
   var status
   var message

   this.toEqual = function(comparator) {
     comparator = comparator
     message = ' to equal '
     if (variable == comparator) {
       status = 'PASS'
     } else {
       status = 'FALSE'
     }
     pushToResults(status, variable, message, comparator)
  }

   this.toNotEqual = function(comparator) {
     comparator = comparator
     message = ' to equal '
     if (variable != comparator) {
       status = 'PASS'
     } else {
       status = 'FALSE'
     }
     pushToResults(status, variable, message, comparator)
   }

   pushToResults = function(status, variable, message, comparator) {
     parent.results.push({
       status: status,
       message: 'expect ' + variable + message + comparator + ' -- ' + status
     })
   }
 }

