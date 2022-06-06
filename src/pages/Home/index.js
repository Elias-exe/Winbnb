import { useEffect, useState } from 'react';
import { CardGroup, Card } from './styles';
import stays from '../../components/stays.json';

import SelectContainer from '../../components/SelectContainer';
import PageHeader from '../../components/PageHeader';
import Header from '../../components/Header';

export default function Home() {
  const [house, setHouse] = useState([]);
  const [component, setComponent] = useState(false);

  function loadHouses() {
    setHouse(stays);
  }

  function renderSelectContainer() {
    const interruptorComponent = !component;
    setComponent(interruptorComponent);
  }

  useEffect(() => {
    loadHouses();
  }, [loadHouses]);

  console.log(component);

  return (
    <>
      {component && (
      <SelectContainer renderSelectContainer={renderSelectContainer} />
      )}
      <Header renderSelectContainer={renderSelectContainer} />
      <PageHeader />

      <CardGroup>
        {house.map((stay) => (
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
