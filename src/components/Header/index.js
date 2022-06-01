import { Container } from './styles';
import logo from '../../assets/styles/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Winbnb" />
      <span>Navbar</span>
    </Container>
  );
}
