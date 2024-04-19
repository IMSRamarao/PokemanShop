/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import Home from '../screens/Home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.useFakeTimers();
test('App snapshots', () => {
  const snap = renderer.create(<App />).toJSON();
  expect(snap).toMatchSnapshot();
});

test('Home snapshots', () => {
  const snap = renderer.create(<Home />).toJSON();
  expect(snap).toMatchSnapshot();
});
