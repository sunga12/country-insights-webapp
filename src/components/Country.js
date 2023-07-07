import PropTypes from 'prop-types';

function Country({
  cca3, name, population,
}) {
  return (
    <>
      <div className="box-text" key={cca3}>
        <p className="country-name">
          {name.toUpperCase()}
        </p>
        <p>
          Population:
          {' '}
          {population}
        </p>
      </div>
    </>
  );
}

Country.defaultProps = {
  name: '',
  population: 0,
  cca3: '',
};

Country.propTypes = {
  name: PropTypes.string,
  population: PropTypes.number,
  cca3: PropTypes.string,
};

export default Country;
