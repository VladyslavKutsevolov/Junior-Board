import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Collection = () => {
  const [, , id] = useLocation().pathname.split('/');
  const history = useHistory();
  return (
    <div>
      <button
        className="p-2 border rounded-md"
        type="button"
        onClick={() => history.goBack()}
      >
        Back
      </button>
      <h1>Collection</h1>
    </div>
  );
};

export default Collection;
