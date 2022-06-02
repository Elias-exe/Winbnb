/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Select from '../Select';
import stays from '../stays.json';
import { Container } from './styles';

export default function SearchBar({ size }) {
  const [stay, useStay] = useState([]);

  const setStay = new Set();

  const filteredStay = stay.filter((location) => {
    const duplicatedLocation = setStay.has(location.city);
    setStay.add(location.city);
    return !duplicatedLocation;
  });

  function loadStay() {
    useStay(stays);
  }

  useEffect(() => {
    loadStay();
  });

  return (
    <Container size={size}>
      <Select>
        {filteredStay.map((location) => (
          <option value="">{location.city}, {location.country}</option>
        ))}
      </Select>
      <input type="text" placeholder="Add guests" />
      <button id="search-icon" className="material-icons" type="button">search</button>
    </Container>
  );
}

SearchBar.propTypes = {
  size: PropTypes.number,
};

SearchBar.defaultProps = {
  size: 300,
};
