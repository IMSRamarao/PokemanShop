import {configureStore} from '@reduxjs/toolkit';
import amazonReducer from './AmazonSlice';
import PokemanSlice from './PokemanSlice';

export const store = configureStore({
  reducer: {
    amazon: amazonReducer,
    pokeman: PokemanSlice,
  },
});
