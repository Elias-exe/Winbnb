import { Container } from './styles';

import PageHeader from '../../components/PageHeader';
import Header from '../../components/Header';

export default function Home() {
  return (
    <Container>
      <Header />
      <PageHeader />
    </Container>
  );
}
