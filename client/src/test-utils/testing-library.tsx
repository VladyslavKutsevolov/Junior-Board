import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

interface Prop {
  children: ReactNode;
}

const StoreProvider = ({ children }: Prop) => {
  return <Provider store={store}>{children}</Provider>;
};

const renderWithReduxStore = (ui: JSX.Element, options?: any) => {
  return render(ui, { wrapper: StoreProvider, ...options });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithReduxStore as render };
