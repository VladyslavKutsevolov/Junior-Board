import { CollectionLinksState } from './collectionLinksState';

export interface CollectionsStateResource {
  id?: string;
  name: string;
  description: string;
  links: CollectionLinksState[];
}

export interface CollectionState {
  collections: CollectionsStateResource[];
}

export const initialState: CollectionState = {
  collections: []
};
