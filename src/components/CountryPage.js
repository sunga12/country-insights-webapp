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
          <div className="top d-flex align-items-center justify-cont-space-between">
            <img className="flag flag-top" src={country.flags.png} alt={country.name.common} />
            <div className="heading">
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
            </div>
          </div>
          <div className="stats-by-country">
            COUNTRY BREAKDOWN:
          </div>
          <div className="country-details">
            <p className="det">
              Official Name:
              {' '}
              {country.name.official}
            </p>
            <p className="det">
              Area:
              {' '}
              {country.area}
              km
            </p>
            <p className="det">
              Capital City:
              {' '}
              {country.capital}
            </p>
            <p className="det">
              Region:
              {' '}
              {country.region}
            </p>
            <p className="det">
              Sub-Region:
              {' '}
              {country.subregion}
            </p>
            <p className="det">
              Latitude:
              {' '}
              {country.capitalInfo.latlng[0]}
            </p>
            <p className="det">
              Longitude:
              {' '}
              {country.capitalInfo.latlng[1]}
            </p>
            <p className="det">
              Timezone:
              {' '}
              {country.timezones}
            </p>
            <p className="det">
              CCN3:
              {' '}
              {country.ccn3}
            </p>
            <p className="det">
              CIOC:
              {' '}
              {country.cioc}
            </p>
          </div>
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
