import { Container, CardGroup, Card } from './styles';

import PageHeader from '../../components/PageHeader';
import Header from '../../components/Header';

export default function Home() {
  return (
    <Container>
      <Header />
      <PageHeader />

      <CardGroup>
        <Card>
          <img src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80" alt="Hotel" />
          <div className="infos">
            <span className="host-tag">SUPER HOST</span>
            <span>Entire apartment . 2 beds</span>
            <div className="avaliation">
              <span className="material-icons">star</span>
              <span>4.40</span>
            </div>
          </div>
          <span className="title">Stylist apartment in center of the city</span>
        </Card>

        <Card>
          <img src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80" alt="Hotel" />
          <div className="infos">
            <span className="host-tag">SUPER HOST</span>
            <span>Entire apartment . 2 beds</span>
            <div className="avaliation">
              <span className="material-icons">star</span>
              <span>4.40</span>
            </div>
          </div>
          <span className="title">Stylist apartment in center of the city</span>
        </Card>
        <Card>
          <img src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80" alt="Hotel" />
          <div className="infos">
            <span className="host-tag">SUPER HOST</span>
            <span>Entire apartment . 2 beds</span>
            <div className="avaliation">
              <span className="material-icons">star</span>
              <span>4.40</span>
            </div>
          </div>
          <span className="title">Stylist apartment in center of the city</span>
        </Card>
        <Card>
          <img src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80" alt="Hotel" />
          <div className="infos">
            <span className="host-tag">SUPER HOST</span>
            <span>Entire apartment . 2 beds</span>
            <div className="avaliation">
              <span className="material-icons">star</span>
              <span>4.40</span>
            </div>
          </div>
          <span className="title">Stylist apartment in center of the city</span>
        </Card>

      </CardGroup>

    </Container>
  );
}
