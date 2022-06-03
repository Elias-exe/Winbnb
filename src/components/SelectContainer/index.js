/* eslint-disable react/jsx-one-expression-per-line */
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar';
import { Overlay, Container } from './styles';
import stays from '../stays.json';

export default function SelectContainer() {
  const [stay, setStay] = useState([]);
  const [buttonLabel, setButtonLabel] = useState('Add Location');
  const [showStayList, setShowStayList] = useState(false);

  const setRegion = new Set();

  const filterStay = stay.filter((location) => {
    const duplicatedPerson = setRegion.has(location.city);
    setRegion.add(location.city);
    return !duplicatedPerson;
  });

  function loadStay() {
    setStay(stays);
  }

  function handleShowStayList() {
    const changeShowStayList = showStayList ? setShowStayList(false) : setShowStayList(true);
    return changeShowStayList;
  }

  async function handleChangeLabelName(event) {
    const labelName = [];
    labelName.push(event.target.innerText);
    const filteredLabelName = labelName.filter((label) => label !== 'pin_drop');
    setButtonLabel(await filteredLabelName.toString());
  }

  useEffect(() => (
    loadStay()
  ), []);

  console.log(showStayList);

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <div className="infos">
          <SearchBar size={1000} buttonLabel={buttonLabel} metodo={handleShowStayList} />
          <div className="searchBar-container">
            {showStayList && (
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
        </div>
      </Container>
    </Overlay>,
    document.getElementById('selection-root'),
  );
}
