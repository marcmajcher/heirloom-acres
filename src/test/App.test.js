import React from 'react';
// import { render } from '@testing-library/react';
import App from '../components/App';
import { wrapProvider} from '../setupTests'

test('renders HA title correctly', () => {
  const { getByText } = wrapProvider( <App />)
  const header = getByText(/Heirloom Acres/i);
  expect(header).toBeInTheDocument();
});
