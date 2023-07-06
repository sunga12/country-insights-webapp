import PropTypes from 'prop-types';

function Country({
  cca3, name, population,
}) {
  return (
    <>
      <div key={cca3}>
        <p>
          {name}
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
