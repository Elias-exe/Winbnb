/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function PageHeader({ staysTotal }) {
  return (
    <Container>
      <span className="title-location">Stays in Finland</span>
      <span>{staysTotal}+ stays</span>
    </Container>
  );
}

PageHeader.propTypes = {
  staysTotal: PropTypes.number.isRequired,
};
