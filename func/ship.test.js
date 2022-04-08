const Ship = require('./ship')

test('expect calculator.add(1,2) to equals 3', () => {
  const scout = Ship(2, ['1','2'], false);
  expect(scout.hit(1)).toBe(['1','hit'], false);
})

scout.hit(2)