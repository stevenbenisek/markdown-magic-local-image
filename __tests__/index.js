const path = require('path');
const transform = require('../index');

const config = {
  originalPath: path.resolve(__dirname),
};

test('LOCALIMAGE', () => {
  expect(transform(null, null, config)).toMatchSnapshot();
});

test('LOCALIMAGE:heading=false', () => {
  expect(transform(null, { heading: 'false' }, config)).toMatchSnapshot();
});

test('LOCALIMAGE:headingLevel=4', () => {
  expect(transform(null, { headingLevel: '4' }, config)).toMatchSnapshot();
});

test('LOCALIMAGE:include=**/*.svg', () => {
  expect(transform(null, { include: '**/*.svg' }, config)).toMatchSnapshot();
});
