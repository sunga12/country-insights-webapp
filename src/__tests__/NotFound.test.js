import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import Store from '../redux/store';
import NotFound from '../components/NotFound';

it('MyProfile component test', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Provider store={Store}>
          <NotFound />
        </Provider>
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
