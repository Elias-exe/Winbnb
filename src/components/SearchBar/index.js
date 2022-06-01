import { Container } from './styles';

export default function SearchBar() {
  return (
    <Container>
      <button id="select-location" type="button">Helsinki, Finland</button>
      <input type="text" placeholder="Add guests" />
      <button id="search-icon" className="material-icons" type="button">search</button>
    </Container>
  );
}
