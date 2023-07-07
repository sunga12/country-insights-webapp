import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import CountriesContainer from '../components/CountriesContainer';
import Store from '../redux/store';

it('CountriesContainer component test', () => {
  const tree = render(
    <Provider store={Store}>
      <CountriesContainer />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
