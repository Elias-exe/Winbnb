import PropTypes from 'prop-types';

import { Container } from './styles';
import logo from '../../assets/styles/images/logo.svg';
import SearchBar from '../SearchBar';

export default function Header({
  handleRenderSelectContainer,
  buttonLabel,
  guestLabel,
}) {
  return (
    <Container>
      <img src={logo} alt="Winbnb" />
      <SearchBar
        guestLabel={guestLabel}
        buttonLabel={buttonLabel}
        handleRenderSelectContainer={handleRenderSelectContainer}
      />
    </Container>
  );
}

Header.propTypes = {
  handleRenderSelectContainer: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string,
  guestLabel: PropTypes.number,
};

Header.defaultProps = {
  buttonLabel: 'Add Location',
  guestLabel: 0,
};
