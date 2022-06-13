import {
  useCallback,
  useEffect, useState,
} from 'react';
import { CardGroup, Card } from './styles';
import stays from '../../components/stays.json';

import SelectContainer from '../../components/SelectContainer';
import PageHeader from '../../components/PageHeader';
import Header from '../../components/Header';

export default function Home() {
  const [house, setHouse] = useState([]);
  const [receiveFilteredData, setReceiveFilteredData] = useState([]);
  const [component, setComponent] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('Add Location');
  const [guestLabel, setGuestLabel] = useState(0);

  function handleRenderSelectContainer() {
    const removeComponent = !component;
    setComponent(removeComponent);
  }

  const loadHouses = useCallback(() => {
    setHouse(stays);
  }, []);

  function handleSubmit(stayData) {
    const dataFromFilter = {
      city: stayData.city,
      country: stayData.country,
      childrenCount: stayData.childrenCount,
      adultsCount: stayData.adultsCount,
      guestTotal: stayData.guestTotal,
    };
    setReceiveFilteredData(dataFromFilter);
  }

  const filterStays = (filteredData) => {
    if (receiveFilteredData.length === 0) {
      return filteredData;
    }

    const filtredStays = filteredData.filter(
      (stay) => stay.city === receiveFilteredData.city
      && stay.maxGuests === receiveFilteredData.guestTotal,
    );
    return filtredStays;
  };

  const handleChangeLabelName = useCallback(() => {
    if (receiveFilteredData.city === undefined && receiveFilteredData.country === undefined) {
      setButtonLabel('Add Location');
    } else {
      setButtonLabel(`${receiveFilteredData.city}, ${receiveFilteredData.country}`);
    }
  });

  const handleChangeGuestLabel = useCallback(() => {
    if (receiveFilteredData.guestTotal >= 0) {
      setGuestLabel(receiveFilteredData.guestTotal);
    }
  });

  const houseTotal = filterStays(house).length;

  useEffect(() => {
    loadHouses();
    handleChangeLabelName();
    handleChangeGuestLabel();
  }, [loadHouses, handleChangeLabelName, handleChangeGuestLabel]);

  return (
    <>
      {component && (
      <SelectContainer
        handleRenderSelectContainer={handleRenderSelectContainer}
        onSubmit={handleSubmit}
      />
      )}
      <Header
        guestLabel={guestLabel}
        buttonLabel={buttonLabel}
        handleRenderSelectContainer={handleRenderSelectContainer}
      />
      <PageHeader
        staysTotal={houseTotal}
      />

      <CardGroup>
        {filterStays(house).map((stay) => (
          <Card key={stay.title}>
            <img src={stay.photo} alt="Stay" />
            <div className="infos">
              {stay.superHost && (
              <span className="host-tag">SUPER HOST</span>
              )}
              <span>{stay.type}</span>
              <div className="avaliation">
                <span className="material-icons">star</span>
                <span>{stay.rating}</span>
              </div>
            </div>
            <span className="title">{stay.title}</span>
          </Card>
        ))}

      </CardGroup>

    </>
  );
}
