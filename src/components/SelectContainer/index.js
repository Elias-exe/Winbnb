/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-one-expression-per-line */
import ReactDOM from 'react-dom';
import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler';
import SearchBar from '../SearchBar';
import { Overlay, Container, ShowInfos } from './styles';
import stays from '../stays.json';

export default function SelectContainer({
  handleRenderSelectContainer,
  onSubmit,
}) {
  const [stay, setStay] = useState([]);
  const [buttonLabel, setButtonLabel] = useState('Add Location');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [hidden, setHidden] = useState(true);
  const [showStayList, setShowStayList] = useState(false);
  const [showGuestInfos, setShowGuestInfos] = useState(false);
  const [adultsCount, setAdultsCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [guestTotal, setGuestTotal] = useState(0);

  const setRegion = new Set();

  const filterStay = stay.filter((location) => {
    const duplicatedPerson = setRegion.has(location.city);
    setRegion.add(location.city);
    return !duplicatedPerson;
  });

  const handleShowStayList = useCallback(() => {
    const changeShowStayList = showStayList ? setShowStayList(false) : setShowStayList(true);
    return changeShowStayList;
  }, [showStayList]);

  function loadStay() {
    setStay(stays);
  }

  function handleAdultsPlus() {
    setAdultsCount(adultsCount + 1);
  }

  function handleAdultsMinus() {
    if (adultsCount >= 1) {
      setAdultsCount(adultsCount - 1);
    }
  }

  function handleChildrensPlus() {
    setChildrenCount(childrenCount + 1);
  }

  function handleChildrensMinus() {
    if (childrenCount >= 1) {
      setChildrenCount(childrenCount - 1);
    }
  }

  function handleChangeGuestTotal() {
    const total = adultsCount + childrenCount;

    setGuestTotal(total);
  }

  function handleChangeLabelName(event) {
    const labelName = [];
    labelName.push(event.target.innerText);
    setCity(event.target.firstChild.data);
    setCountry(event.target.lastChild.data);
    setButtonLabel(labelName.toString());
  }

  function handleShowGuestInfos() {
    const changeShowGuestInfos = showGuestInfos
      ? setShowGuestInfos(false)
      : setShowGuestInfos(true);
    return changeShowGuestInfos;
  }

  function handleSubmit() {
    onSubmit({
      city, country, childrenCount, adultsCount, guestTotal,
    });
  }

  useEffect(() => (
    loadStay()
  ), []);

  useEffect(() => (
    handleChangeGuestTotal()
  ), [adultsCount, childrenCount]);

  return ReactDOM.createPortal(
    <>
      {hidden && (
      <Overlay>
        <OutsideClickHandler onOutsideClick={() => {
          setHidden(false);
          handleRenderSelectContainer(true);
        }}
        >
          <Container>
            <div className="infos">
              <SearchBar
                size={1000}
                buttonLabel={buttonLabel}
                guestLabel={guestTotal}
                maximizedButton
                handleShowStayList={handleShowStayList}
                handleShowGuestInfos={handleShowGuestInfos}
                onSubmit={handleSubmit}
                sethidden={setHidden}
                removeComponent={handleRenderSelectContainer}
              />
              <ShowInfos>
                <div className="searchBar-container">
                  {(showStayList) && (
                    filterStay.map((region) => (
                      <div className="location-container">
                        <span className="material-icons md-10">
                          pin_drop
                        </span>
                        <button
                          type="button"
                          className="location"
                          onClick={(event) => {
                            handleChangeLabelName(event);
                          }}
                        >
                          <span>{region.city}, {region.country}</span>
                        </button>
                      </div>
                    ))
                  )}
                </div>
                <div className="guestContainer">
                  {(showGuestInfos) && (
                    <>
                      <div className="guestInfos">
                        <strong>Adults</strong>
                        <span>Ages 13 or above</span>
                        <div className="contador">
                          <button type="button" onClick={handleAdultsMinus}>-</button>
                          <strong>{adultsCount}</strong>
                          <button type="button" onClick={handleAdultsPlus}>+</button>
                        </div>
                      </div>
                      <div className="guestInfos">
                        <strong>Children</strong>
                        <span>Ages 2 - 12</span>
                        <div className="contador">
                          <button type="button" onClick={handleChildrensMinus}>-</button>
                          <strong>{childrenCount}</strong>
                          <button type="button" onClick={handleChildrensPlus}>+</button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </ShowInfos>
            </div>
          </Container>
        </OutsideClickHandler>
      </Overlay>
      )}
    </>,
    document.getElementById('selection-root'),

  );
}

SelectContainer.propTypes = {
  handleRenderSelectContainer: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
