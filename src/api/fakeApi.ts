import { CollectionsStateResource } from '../redux/state/collectionsState';

const collection: CollectionsStateResource[] = [
  {
    id: 'adsads',
    name: 'React',
    description: 'some Descriptions',
    links: [
      {
        id: 'dasdfasf',
        resourceName: 'some react link',
        url: 'https://google.com'
      }
    ]
  },
  {
    id: 'adsadsadsads',
    name: 'Vue',
    description: 'some Descriptions',
    links: [
      {
        id: 'dasdfasf',
        resourceName: 'some vue link',
        url: 'https://google.com'
      }
    ]
  }
];

export const fetchAllCollections = (): CollectionsStateResource[] => collection;
