import { useDispatch, useSelector } from 'react-redux';
import { searchCountry } from '../redux/countries/countriesSlice';

function FilterCountries() {
  const { searchField } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  function HandleFilter(e) {
    dispatch(searchCountry(e.target.value));
  }

  return (
    <div className="search">
      <input
        className="search-box"
        type="text"
        value={searchField}
        onChange={(e) => HandleFilter(e)}
        placeholder="Search By Region ie. Africa, Asia, Oceana, America, Europe"
      />
      <p className="note">Note: Case Sensitive</p>
    </div>
  );
}

export default FilterCountries;
