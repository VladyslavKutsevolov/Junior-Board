import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import Collections from './components/collections/Collections';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Collections />
    </Provider>
  );
}

export default App;
