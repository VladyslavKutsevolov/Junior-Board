import React from 'react';
import { PaperClipIcon } from '@heroicons/react/solid';
import { ILink } from './CollectionDetails';

interface Props {
  id: string;
  name: string;
  link: string;
}

const Resource = (props: Props) => {
  const { name } = props;
  return (
    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
      <div className="w-0 flex-1 flex items-center">
        <PaperClipIcon
          className="flex-shrink-0 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        <span className="ml-2 flex-1 w-0 truncate">{name}</span>
      </div>
      <div className="ml-4 flex-shrink-0">
        <a
          href="#"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Go to
        </a>
      </div>
    </li>
  );
};

export default Resource;
