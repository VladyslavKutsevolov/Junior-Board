import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CollectionLinksState } from './state/collectionLinksState';
import { initialState } from './state/collectionsState';

interface LinkPayload {
  collectionId: string;
  resource: CollectionLinksState;
}

export const collectionLinksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    createLink: (state, action: PayloadAction<LinkPayload>) => {
      const collection = state.collections.find(
        c => c.id === action.payload.collectionId
      );
      if (collection) {
        collection.links.push(action.payload.resource);
      }
    }
  }
});

export const { createLink } = collectionLinksSlice.actions;

export default collectionLinksSlice.reducer;
