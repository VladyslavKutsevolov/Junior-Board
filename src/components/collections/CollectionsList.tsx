import React, { FC } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { CollectionsStateResource } from '../../redux/state/collectionsState';
import Collection from './Collection';

interface Props {
  collections: CollectionsStateResource[];
}

const CollectionsList = (props: Props) => {
  const { collections } = props;

  return (
    <>
      {collections.map(collection => (
        <Collection key={collection.id} collection={collection} />
      ))}
    </>
  );
};

export default CollectionsList;
