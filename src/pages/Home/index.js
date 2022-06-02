import { useEffect, useState } from 'react';
import { Container, CardGroup, Card } from './styles';
import stays from '../../components/stays.json';

import PageHeader from '../../components/PageHeader';
import Header from '../../components/Header';

export default function Home() {
  const [house, setHouse] = useState([]);

  function loadHouses() {
    setHouse(stays);
  }

  useEffect(() => {
    loadHouses();
  }, [loadHouses]);

  return (
    <Container>
      <Header />
      <PageHeader />

      <CardGroup>
        {house.map((stay) => (
          <Card key={stay.city}>
            <img src={stay.photo} alt="Hotel" />
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

    </Container>
  );
}
