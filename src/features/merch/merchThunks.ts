import { fetchApi } from '@/fetchApi';
import type { Product } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk<Product[]>('merch/fetchProducts', async () => {
  return await fetchApi<Product[]>('clothes');
});
