import { useEffect, useMemo, useState } from 'react';
import { CardGroup, Card } from './styles';
import stays from '../../components/stays.json';

import SelectContainer from '../../components/SelectContainer';
import PageHeader from '../../components/PageHeader';
import Header from '../../components/Header';

export default function Home() {
  const [house, setHouse] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [component, setComponent] = useState(false);

  const filteredHouses = useMemo(() => house.filter((houses) => (
    houses.city === filteredData.city
    && houses.maxGuests === filteredData.guestTotal
  )), [house, filteredData]);

  const houseTotal = filteredHouses.length;

  function loadHouses() {
    setHouse(stays);
  }

  function renderSelectContainer() {
    const removeComponent = !component;
    setComponent(removeComponent);
  }

  function handleSubmit(stayData) {
    const dataFromFilter = {
      city: stayData.city,
      country: stayData.country,
      childrenCount: stayData.childrenCount,
      adultsCount: stayData.adultsCount,
      guestTotal: stayData.guestTotal,
    };
    setFilteredData(dataFromFilter);
  }

  useEffect(() => {
    loadHouses();
  }, [loadHouses]);

  return (
    <>
      {component && (
      <SelectContainer
        renderSelectContainer={renderSelectContainer}
        onSubmit={handleSubmit}
      />
      )}
      <Header
        renderSelectContainer={renderSelectContainer}
      />
      <PageHeader staysTotal={houseTotal} />

      <CardGroup>
        {(filteredHouses.length === 0 ? house : filteredHouses).map((stay) => (
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
