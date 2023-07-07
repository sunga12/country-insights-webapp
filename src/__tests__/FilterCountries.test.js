import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import FilterCountries from '../components/FilterCountries';
import Store from '../redux/store';

it('Filter Countries component test', () => {
  const tree = render(
        <Provider store={Store}>
          <FilterCountries />
        </Provider>
    )
  expect(tree).toMatchSnapshot();
});
