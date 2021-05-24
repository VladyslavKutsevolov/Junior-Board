import React, { FC, useEffect, useState } from 'react';
import CollectionsList from './CollectionsList';
import CollectionForm from './CollectionForm';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  createCollection,
  fetchCollections
} from '../../redux/collectionsSlice';
import { CollectionsStateResource } from '../../redux/state/collectionsState';
import { fetchAllCollections } from '../../api/fakeApi';
import CollectionDetails from './CollectionDetails';

const Collections: FC = () => {
  const [openForm, setOpenForm] = useState(false);
  const [collectionList, setCollectionList] = useState<
    CollectionsStateResource[]
  >([]);
  const { collections } = useAppSelector(state => state.collections);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCollections(fetchAllCollections()));
  }, []);

  useEffect(() => {
    setCollectionList(collections);
  }, [collections]);

  const createNewCollection = (collection: CollectionsStateResource) => {
    dispatch(createCollection(collection));
  };

  return (
    <>
      <button
        className="m-3 p-2 border-b border-gray-200 sm:rounded-lg bg-purple-500 text-white"
        type="button"
        onClick={() => setOpenForm(true)}
      >
        Create Collection
      </button>
      <CollectionForm
        open={openForm}
        createCollection={createNewCollection}
        setOpen={setOpenForm}
      />
      <CollectionsList collections={collectionList} />
    </>
  );
};

export default Collections;
