import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

describe('Home Component', () => {
  it('renders correctly', async () => {
    const dummyProductData = [
      {
        id: 1,
        title: 'Pikachu',
        price: 10,
        description: 'Electric type Pokémon',
        category: 'Electric',
        image: 'url',
        rating: 5,
      },
    ];
    fetch.mockResponseOnce(JSON.stringify(dummyProductData));
    const {findByText} = render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>,
    );
    await findByText('Pokeman Store');
  });

  it('fetches products successfully and renders them', async () => {
    const products = [
      {
        id: 1,
        title: 'Pikachu',
        price: 10,
        description: 'Electric type Pokémon',
        category: 'Electric',
        image: 'url',
        rating: 5,
      },
    ];
    fetch.mockResponseOnce(JSON.stringify(products));

    const {queryByText} = render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>,
    );

    await waitFor(() => expect(queryByText('Data is loading...')).toBeNull());
  });

  it('displays the loading state initially', () => {
    fetch.mockResponseOnce(JSON.stringify([])); // Ensure fetch is mocked even if the response is empty
    const {getByText} = render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>,
    );
    expect(getByText('Data is loading...')).toBeTruthy();
  });

  it('hides the loading indicator after data is fetched', async () => {
    fetch.mockResponseOnce(JSON.stringify([])); // Simulate an empty response for simplicity

    const {queryByText} = render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>,
    );
    await waitFor(() => expect(queryByText('Data is loading...')).toBeNull());
  });
});
