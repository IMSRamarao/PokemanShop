import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  products: [],
  items: [],
};

export const amazonSlice = createSlice({
  name: 'amazon',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(item => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.products.find(item => item.id === action.payload.id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        item => item.id !== action.payload,
      );
    },
    pokeAddToCart: (state, action) => {
      const item = state.items.find(item => item.name === action.payload.name);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    pokeIncreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity++;
      }
    },
    pokeDecreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.name === action.payload.name);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    PokeDeleteItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    resetCart: state => {
      state.products = [];
      state.items = [];
    },
  },
});

export const {
  pokeAddToCart,
  pokeIncreaseQuantity,
  pokeDecreaseQuantity,
  PokeDeleteItem,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  resetCart,
} = amazonSlice.actions;
export default amazonSlice.reducer;
