const sample = require('./sample');

test('sample', function() {
  expect(sample.one() + sample.one()).toBe(2);
});
