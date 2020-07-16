import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './lib/reducer';

const store = createStore(reducer);

export function wrapProvider(component) {
  return render(<Provider store={store}>{component}</Provider>);
}
