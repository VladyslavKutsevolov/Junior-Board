import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  initialState,
  CollectionsStateResource
} from './state/collectionsState';

export const collectionsSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {
    createCollection: (
      state,
      action: PayloadAction<CollectionsStateResource>
    ) => {
      state.collections.push(action.payload);
    },
    fetchCollections: (
      state,
      action: PayloadAction<CollectionsStateResource[]>
    ) => {
      state.collections = action.payload;
    }
  }
});

export const { createCollection, fetchCollections } = collectionsSlice.actions;

export default collectionsSlice.reducer;
