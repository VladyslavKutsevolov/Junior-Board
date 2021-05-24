import React, { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Transition } from '@headlessui/react';

import Resource from './Resource';
import { classNames } from '../../utils/classNames';
import { createLink } from '../../redux/collectionLinksSlice';
import { CollectionsStateResource } from '../../redux/state/collectionsState';

export interface ILink {
  id: string;
  resourceName: string;
  url: string;
}

interface Props {
  collection: CollectionsStateResource;
  open: boolean;
}

const resourceState: ILink = {
  id: '',
  resourceName: '',
  url: ''
};

const CollectionDetails = (props: Props) => {
  const { collection, open } = props;
  const [resource, setResource] = useState(resourceState);

  const handleChange = ({
    target
  }: ChangeEvent<{ name: string; value: string }>) => {
    const id = uuid();
    setResource({
      ...resource,
      id,
      [target.name]: target.value
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (collection.id) {
      const newResource = {
        collectionId: collection.id,
        resource
      };
      console.log('newResource', newResource);
      // createLink(newResource);
    }
  };

  return (
    <Transition
      show={open}
      as={Fragment}
      enter="transition ease-out duration-250"
      enterFrom="transform opacity-0 scale-98"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <div
        className={classNames(
          !open ? 'hidden' : '',
          'bg-white shadow overflow-hidden sm:rounded-lg'
        )}
      >
        <div className="border-t border-gray-200">
          <dl>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Create Link</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <form onSubmit={onSubmit} className="grid grid-cols-6 gap-6">
                  <div className="col-span-2">
                    <label
                      htmlFor="resource_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Link Name
                    </label>
                    <input
                      type="text"
                      name="resource_name"
                      id="resourceName"
                      className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Resource name"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-3">
                    <label
                      htmlFor="url"
                      className="block text-sm font-medium text-gray-700"
                    >
                      URL
                    </label>
                    <input
                      type="text"
                      name="url"
                      id="url"
                      className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="http://www.example.com"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-1 flex items-end">
                    <button
                      type="submit"
                      className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Create
                    </button>
                  </div>
                </form>
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Link</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                  {collection.links.map(link => (
                    <Resource key={link.id} link={link} />
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Transition>
  );
};

export default CollectionDetails;
