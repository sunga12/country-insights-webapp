import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import Store from '../redux/store';
import Navbar from '../components/Navbar';

it('Navbar component test', () => {
  const tree = renderer.create(
    <MemoryRouter>
    <Provider store={Store}>
      <Navbar />
    </Provider>
  </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
