import { fetchProducts } from '@/features/merch/merchThunks';
import type { Product } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

interface MerchState {
  products: Product[];
  isLoading: boolean;
}

const initialState: MerchState = {
  products: [],
  isLoading: false,
};

export const merchSlice = createSlice({
  name: 'merch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload: apiProducts }) => {
        state.products = apiProducts;
        state.isLoading = false;
        console.log(apiProducts);
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
  selectors: {
    selectProducts: (state) => state.products,
    selectIsLoading: (state) => state.isLoading,
  },
});

export const { selectProducts, selectIsLoading } = merchSlice.selectors;
