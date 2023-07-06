import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountriesData } from '../redux/countries/countriesSlice';
import Country from './Country';

function CountriesContainer() {
  const { countriesArray, isLoading } = useSelector((state) => state.countries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div>
        Stats by Country
      </div>

      <ul className="countries-list">
        {countriesArray.map((country) => (
          <div className="country" key={country.cca3}>
            <Link to={`/${country.cca3}`}>
              <img className="flag" src={country.flags.png} alt="flag" />
              <Country
                cca3={country.cca3}
                name={country.name.common}
                area={country.area}
                population={country.population}
              />
            </Link>
          </div>
        ))}
      </ul>
    </>
  );
}

export default CountriesContainer;
