function testFileTests() {
  it('should check if passed in number is over 10', function() {
    this.expect(overTenHours(10)).toEqual(false)
    this.expect(overTenHours(11)).toEqual(true)
  })

  it('should check if passed in number is under 3', function() {
    this.expect(underThreeHours(3)).toEqual(false)
    this.expect(underThreeHours(2)).toEqual(true)
  })

  it('should check if passed in row is a date row', function() {
    this.expect(isADateRow(['',''])).toEqual(false)
    this.expect(isADateRow([new Date(),''])).toEqual(true)
  })

  it('should determine if passed in row is a name row', function() {
    var rowOne = ['', '', '']
    this.expect(isANameRow(rowOne)).toEqual(false)

    var rowTwo = ['', 'carlos', '']
    this.expect(isANameRow(rowTwo)).toEqual(true)
  })

  it('should print multiple rows correctly', function() {
    var data = [
      ["Employee Timecard", "", "", "", "", "", "", "WareHouse", "", "", "", "",
       "", "", ""],
      ["2/5/2018 11:01:53 AM (UTC-05:00) Eastern Time (US & Canada)", "", "",
       "", "", "", "", "1/29/2018 - 2/4/2018", "", "", "", "", "", "", ""],
      ["Employe Name", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ['', 'carlos', ''],
      [(new Date(1517184000000)), "", "Packaging Logistics",
       (new Date(-2209131000000)), (new Date(-2209111200000)), 5.5, 0.75, "", 0,
       12.5, 68.75, "", 0, "", 0],
      [(new Date(-2209131000000)), '', 'packaging', '8:30 AM', '2:00 PM', 5.5,
       0.75, '', 0, '$12.50'],
      ['', 'dude', ''],
      [(new Date(-2209131000000)), '', 'packaging', '8:30 AM', '2:00 PM', 5.5,
       0.75, '', 0, '$12.50']
    ]

    this.expect(printData(data)[2]).toEqual(data[7])
    this.expect(printData(data)[2][0]).toEqual('dude')
    this.expect(printData(data)[2][1]).toEqual('packaging')
    this.expect(printData(data)[2][3]).toEqual('8:30 AM')
    this.expect(printData(data)[2][4]).toEqual('2:00 PM')
    this.expect(printData(data)[2][5]).toEqual(5.5)
    this.expect(printData(data)[2][6]).toEqual(false)
    this.expect(printData(data)[2][7]).toEqual(false)
    this.expect(printData(data)[2][8]).toEqual(true)
    this.expect(printData(data)[2][9]).toEqual('$12.50')                                  
  })
}
