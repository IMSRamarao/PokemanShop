import 'react-native';
import React from 'react';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Payment from '../screens/Payment';

jest.useFakeTimers();
test('Home check state data', () => {
  let paymentData = renderer.create(<Payment />).toJSON();
  console.log(paymentData);
});

test('Home snapshots', () => {
  const snap = renderer.create(<Payment />).toJSON();
  expect(snap).toMatchSnapshot();
});