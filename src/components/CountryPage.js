import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { getCountryDetails } from '../redux/countries/countriesSlice';

function CountryPage() {
  const { cca3 } = useParams();
  const { countryDetails, isLoading } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryDetails(cca3));
  }, [dispatch, cca3]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      {countryDetails.map((country) => (
        <div key={cca3}>
          <div>
            Country:
          </div>
          <p>
            Name:
            {' '}
            {country.name.common}
          </p>
          <p>
            Population:
            {' '}
            {country.population}
          </p>
          <p>
            Area:
            {' '}
            {country.area}
          </p>
          <p>
            Capital City:
            {' '}
            {country.capital}
          </p>
          <p>
            Region:
            {' '}
            {country.region}
          </p>
          <p>
            Sub-Region:
            {' '}
            {country.subregion}
          </p>
          <p>
            Latitude:
            {' '}
            {country.capitalInfo.latlng[0]}
          </p>
          <p>
            Longitude:
            {' '}
            {country.capitalInfo.latlng[1]}
          </p>
        </div>
      ))}
    </>
  );
}

CountryPage.defaultProps = {
//   name: '',
//   population: 0,
  // cca3: '',
//   capital: '',
//   region: '',
//   subRegion: '',
//   area: 0,
//   lat: 0,
//   lon: 0,
};

CountryPage.propTypes = {
//   name: PropTypes.string,
//   population: PropTypes.number,
  // cca3: PropTypes.string,
//   capital: PropTypes.string,
//   region: PropTypes.string,
//   subRegion: PropTypes.string,
//   area: PropTypes.number,
//   lat: PropTypes.number,
//   lon: PropTypes.number,
};

export default CountryPage;
