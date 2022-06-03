/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function SearchBar({ size, buttonLabel, metodo }) {
  return (
    <Container size={size}>
      <button type="button" onClick={metodo}>
        <div className="location-container">
          <div className="location-label">
            <span>Location</span>
          </div>
          {buttonLabel}
        </div>
      </button>
      <input type="number" placeholder="Add guests" />
      <button id="search-icon" className="material-icons" type="button">search</button>
    </Container>
  );
}

SearchBar.propTypes = {
  size: PropTypes.number,
  buttonLabel: PropTypes.string,
  metodo: PropTypes.bool,
};

SearchBar.defaultProps = {
  size: 300,
  buttonLabel: 'Add Location',
  metodo: false,
};
