import PropTypes from 'prop-types';

import { Container } from './styles';
import logo from '../../assets/styles/images/logo.svg';
import SearchBar from '../SearchBar';

export default function Header({
  handleRenderSelectContainer, onSubmit, filteredHouses,
}) {
  return (
    <Container>
      <img src={logo} alt="Winbnb" />
      <SearchBar
        handleRenderSelectContainer={handleRenderSelectContainer}
        onSubmit={onSubmit}
        filteredHouses={filteredHouses}
      />
    </Container>
  );
}

Header.propTypes = {
  handleRenderSelectContainer: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  filteredHouses: PropTypes.func.isRequired,
};
