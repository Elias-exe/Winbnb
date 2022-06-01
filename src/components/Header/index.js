import { Container } from './styles';
import logo from '../../assets/styles/images/logo.svg';
import SearchBar from '../SearchBar';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Winbnb" />
      <SearchBar />
    </Container>
  );
}
