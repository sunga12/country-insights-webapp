import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Country from '../components/Country';
import Store from '../redux/store';

it('Country component test', () => {
  const tree = render(
        <Provider store={Store}>
          <Country />
        </Provider>
    )
  expect(tree).toMatchSnapshot();
});
