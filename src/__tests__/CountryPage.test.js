import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import CountryPage from '../components/CountryPage';
import Store from '../redux/store';

it('Country Page component test', () => {
  const tree = render(
    <Provider store={Store}>
      <CountryPage />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
