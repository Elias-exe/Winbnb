/* eslint-disable react/jsx-one-expression-per-line */
import ReactDOM from 'react-dom';
import { useCallback, useEffect, useState } from 'react';
import SearchBar from '../SearchBar';
import { Overlay, Container } from './styles';
import stays from '../stays.json';

export default function SelectContainer() {
  const [stay, setStay] = useState([]);
  const [buttonLabel, setButtonLabel] = useState('Add Location');
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
    console.log(labelName);
    const filteredLabelName = labelName.filter((label) => label !== 'pin_drop');
    setButtonLabel(filteredLabelName.toString());
  }

  function handleShowGuestInfos() {
    const changeShowGuestInfos = showGuestInfos
      ? setShowGuestInfos(false)
      : setShowGuestInfos(true);
    return changeShowGuestInfos;
  }

  useEffect(() => (
    loadStay()
  ), []);

  useEffect(() => (
    handleChangeGuestTotal()
  ), [adultsCount, childrenCount]);

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <div className="infos">
          <SearchBar
            size={1000}
            buttonLabel={buttonLabel}
            guestLabel={guestTotal}
            handleShowStayList={handleShowStayList}
            handleShowGuestInfos={handleShowGuestInfos}
          />
          <div className="testes">
            <div className="searchBar-container">
              {(showStayList) && (
                filterStay.map((region) => (
                  <button type="button" className="location" onClick={handleChangeLabelName}>
                    <span className="material-icons md-10">
                      pin_drop
                    </span>
                    <span>{region.city}, {region.country}</span>
                  </button>
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

          </div>

        </div>
      </Container>
    </Overlay>,
    document.getElementById('selection-root'),
  );
}
