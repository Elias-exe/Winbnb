import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar';
import { Container } from './styles';

export function SelectContainer() {
  return ReactDOM.createPortal(
    <Container>
      <SearchBar size={1000} />
    </Container>,
    document.getElementById('selection-root'),
  );
}

SelectContainer.PropTypes = {
  size: PropTypes.number,
};

SelectContainer.defaultProps = {
  size: 300,
};
