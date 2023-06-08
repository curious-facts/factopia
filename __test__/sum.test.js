const sum = require('../src/sum')

describe ('preba para suma', () => { 
  test('1 + 2 is 3',() => {
    expect(sum(1,2)).toBe(3)
})

})