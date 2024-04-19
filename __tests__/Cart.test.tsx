import 'react-native';
import React from 'react';
import Cart from '../screens/Cart';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {store} from '../redux/store';
import {Provider} from 'react-redux';

jest.useFakeTimers();
test('cart check state data', () => {
  let cartData = renderer
    .create(
      <Provider store={store}>
        <Cart />
      </Provider>,
    )
    .toJSON();
  console.log(cartData);
  expect(cartData).toHaveLength(2);
});

test('Cart snapshots', () => {
  const snap = renderer.create(<Cart />).toJSON();
  expect(snap).toMatchSnapshot();
});
