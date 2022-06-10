import PropTypes from 'prop-types';

import { Container } from './styles';
import logo from '../../assets/styles/images/logo.svg';
import SearchBar from '../SearchBar';

export default function Header({
  handleRenderSelectContainer,
  buttonLabel,
}) {
  console.log(buttonLabel);
  return (
    <Container>
      <img src={logo} alt="Winbnb" />
      <SearchBar
        buttonLabel={buttonLabel}
        handleRenderSelectContainer={handleRenderSelectContainer}
      />
    </Container>
  );
}

Header.propTypes = {
  handleRenderSelectContainer: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};
