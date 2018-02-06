function Expectation(parent, variable) {
   var status
   var message

   this.toEqual = function(comparitor) {
     comparitor = comparitor
     message = ' to equal '
     if (variable == comparitor) {
       status = 'PASS'
     } else {
       status = 'FALSE'
     }
     pushToResults(status, variable, message, comparitor)
  }

   this.toNotEqual = function(comparitor) {
     comparitor = comparitor
     message = ' to equal '
     if (variable != comparitor) {
       status = 'PASS'
     } else {
       status = 'FALSE'
     }
     pushToResults(status, variable, message, comparitor)
   }

   pushToResults = function(status, variable, message, comparitor) {
     parent.results.push({
       status: status,
       message: 'expect ' + variable + message + comparitor + ' -- ' + status
     })
   }
 }
