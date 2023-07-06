import { useDispatch, useSelector } from 'react-redux';
import { searchCountry } from '../redux/countries/countriesSlice';

function FilterCountries() {
  const { searchField } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  function HandleFilter(e) {
    dispatch(searchCountry(e.target.value));
  }

  return (
    <div>
      <input
        type="text"
        value={searchField}
        onChange={(e) => HandleFilter(e)}
        placeholder="Search By Country"
      />
      {' '}
      <span>Note: Case Sensitive</span>
    </div>
  );
}

export default FilterCountries;
