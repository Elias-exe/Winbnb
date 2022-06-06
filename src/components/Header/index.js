import PropTypes from 'prop-types';

import { Container } from './styles';
import logo from '../../assets/styles/images/logo.svg';
import SearchBar from '../SearchBar';

export default function Header({ renderSelectContainer }) {
  return (
    <Container>
      <img src={logo} alt="Winbnb" />
      <SearchBar renderSelectContainer={renderSelectContainer} />
    </Container>
  );
}

Header.propTypes = {
  renderSelectContainer: PropTypes.func.isRequired,
};
