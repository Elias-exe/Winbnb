/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function SearchBar({
  size,
  buttonLabel,
  handleShowStayList,
  guestLabel,
  handleShowGuestInfos,
  maximizedButton,
}) {
  return (
    <Container size={size}>
      <button type="button" onClick={handleShowStayList}>
        <div className="location-container">
          <div className="location-label">
            <strong>Location</strong>
          </div>
          {buttonLabel}
        </div>
      </button>
      <button type="button" onClick={handleShowGuestInfos}>
        <div className="guestButtonContainer">
          <strong>Guest</strong>
          { guestLabel === 0 ? 'Add guests' : (guestLabel > 1 ? `${guestLabel} guests` : `${guestLabel} guest`)}
        </div>

      </button>
      {!maximizedButton && (<button id="search-icon" className="material-icons" type="button">search</button>)}
      {maximizedButton && (
        <div className="submitButtonContainer">

          <button type="submit">
            <span className="material-icons">search</span>
            <span>Search</span>
          </button>
        </div>

      )}

    </Container>
  );
}

SearchBar.propTypes = {
  size: PropTypes.number,
  guestLabel: PropTypes.number.isRequired,
  buttonLabel: PropTypes.string,
  handleShowStayList: PropTypes.bool,
  handleShowGuestInfos: PropTypes.bool,
  maximizedButton: PropTypes.bool,
};

SearchBar.defaultProps = {
  size: 300,
  buttonLabel: 'Add Location',
  handleShowStayList: false,
  handleShowGuestInfos: false,
  maximizedButton: false,
};
