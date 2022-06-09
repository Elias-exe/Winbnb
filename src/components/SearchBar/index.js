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
  handleRenderSelectContainer,
  onSubmit,
  sethidden,
  removeComponent,
  handleFilteredHouses,
  setFilterIsTrue,
}) {
  function handleSubmit() {
    const interruptor = !sethidden;
    sethidden(interruptor);
    removeComponent(true);
  }

  return (
    <Container size={size}>
      <button type="button" onClick={handleRenderSelectContainer || handleShowStayList}>
        <div className="location-container">
          <div className="location-label">
            <strong>Location</strong>
          </div>
          {buttonLabel}
        </div>
      </button>
      <button type="button" onClick={handleRenderSelectContainer || handleShowGuestInfos}>
        <div className="guestButtonContainer">
          <strong>Guest</strong>
          { guestLabel === 0 ? 'Add guests' : (guestLabel > 1 ? `${guestLabel} guests` : `${guestLabel} guest`)}
        </div>

      </button>
      {!maximizedButton && (<button id="search-icon" className="material-icons" type="button">search</button>)}
      {maximizedButton && (
        <div className="submitButtonContainer">

          <button
            type="submit"
            onClick={(event) => {
              onSubmit(event);
              setFilterIsTrue(true);
              handleFilteredHouses();
              handleSubmit();
            }}
          >
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
  guestLabel: PropTypes.number,
  buttonLabel: PropTypes.string,
  handleShowStayList: PropTypes.bool,
  handleShowGuestInfos: PropTypes.bool,
  maximizedButton: PropTypes.bool,
  sethidden: PropTypes.bool.isRequired,
  removeComponent: PropTypes.bool.isRequired,
  setFilterIsTrue: PropTypes.bool,
  handleRenderSelectContainer: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleFilteredHouses: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  size: 400,
  buttonLabel: 'Add Location',
  guestLabel: 0,
  handleShowStayList: false,
  handleShowGuestInfos: false,
  maximizedButton: false,
  setFilterIsTrue: false,
};
