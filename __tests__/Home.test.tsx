import 'react-native';
import React from 'react';
import Home from '../screens/Home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.useFakeTimers();
test('Home check state data', () => {
  let homeData = renderer.create(<Home />).toJSON();
  expect(homeData.children).toHaveLength(2);
});

test('Home snapshots', () => {
  const snap = renderer.create(<Home />).toJSON();
  expect(snap).toMatchSnapshot();
});
