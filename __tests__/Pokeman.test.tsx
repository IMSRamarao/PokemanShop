import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {render, waitFor} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';
import amazonReducer from '../redux/AmazonSlice'; // Adjust the path to your pokeman slice
import Pokeman from '../screens/Pokeman';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

// Configure test store with Redux Toolkit
const createTestStore = () => {
  return configureStore({
    reducer: {
      pokeman: amazonReducer, // Ensure the reducer keys match those used in your app's store
    },
  });
};

beforeEach(() => {
  fetch.resetMocks();
});

describe('Pokeman Component', () => {
  it('renders loading state initially', () => {
    fetch.mockResponseOnce(JSON.stringify({results: []}));
    const store = createTestStore();
    const {getByText} = render(
      <Provider store={store}>
        <NavigationContainer>
          <Pokeman />
        </NavigationContainer>
      </Provider>,
    );
    expect(getByText('Data is loading...')).toBeTruthy();
  });

  it('fetches and displays pokeman data successfully', async () => {
    const pokemanData = [{name: 'Bulbasaur'}, {name: 'Charmander'}];
    fetch.mockResponseOnce(JSON.stringify({results: pokemanData}));
    const store = createTestStore();
    const {queryByText, getAllByText} = render(
      <Provider store={store}>
        <NavigationContainer>
          <Pokeman />
        </NavigationContainer>
      </Provider>,
    );

    await waitFor(() => {
      expect(queryByText('Data is loading...')).toBeNull();
      expect(getAllByText('Bulbasaur').length).toBe(1);
      expect(getAllByText('Charmander').length).toBe(1);
    });
  });

  it('handles fetch error gracefully', async () => {
    fetch.mockReject(new Error('API failure')); // Correctly simulate an API error
    const store = createTestStore();
    const {getByText, queryByText} = render(
      <Provider store={store}>
        <NavigationContainer>
          <Pokeman />
        </NavigationContainer>
      </Provider>,
    );

    await waitFor(() => {
      expect(queryByText('Data is loading...')).toBeNull();
      // This line assumes that your component will show this exact text on error
      expect(getByText('Failed to fetch data')).toBeTruthy();
    });
  });
});
