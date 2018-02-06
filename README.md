# Google Apps Test Runner

### Installation 

Include the library in your Google Apps Script with this code:
`1ps77o0HghJlNaPDgZ1cmvChKWKBmP1tDM0YO1tkvOf6iISLFuLf54Z99`

then include `it()` in your file:

`var it = GoogleAppsScriptsTestRunner.it`

### Running Tests

To run all tests in one file, wrap them in one function:

```javascript
function tests() {
  it('should check if passed in number is over 10', function() {
    this.expect(overTenHours(10)).toEqual(false)
    this.expect(overTenHours(11)).toEqual(true)
  })

  it('should check if passed in number is under 3', function() {
    this.expect(underThreeHours(3)).toEqual(false)
    this.expect(underThreeHours(2)).toEqual(true)
  })
}
```

### Test Results:

Results are logged to console in the following format:

For the following passing tests:
```javascript
it('should check if passed in number is over 10', function() {
    this.expect(overTenHours(10)).toEqual(false)
    this.expect(overTenHours(11)).toEqual(true)
  })

  it('should check if passed in number is under 3', function() {
    this.expect(underThreeHours(3)).toEqual(false)
    this.expect(underThreeHours(2)).toEqual(true)
  })
```
Console logs will return:
```javascript
[18-02-05 22:18:31:756 PST] 

should check if passed in number is over 10
expect false to equal false -- PASS
expect true to equal true -- PASS
2 / 2 passed


[18-02-05 22:18:31:757 PST] 

should check if passed in number is under 3
expect false to equal false -- PASS
expect true to equal true -- PASS
2 / 2 passed
```

### API Documentation:

```javascript
it(description, callback)

it('should pass a test', function() {
  this.expect(testPassed).toEqual(true)
})
```


```javascript
expect(thing to be tested)

expect(1 + 1)
```

```javascript
.toEqual(value)

expect(1 + 1).toEqual(2)
```

```javascript
.toNotEqual(value)

expect(1 + 1).toNotEqual(3)
```

