import React from 'react';

import PropTypes from 'prop-types';
import { ErrWrapper } from '../ErrorSearch/ErrorSearch.styled';

export const ErrorSearch = ({ message }) => {
  return (
    <ErrWrapper>
      <p>{message}</p>
    </ErrWrapper>
  );
};

ErrorSearch.propTypes = {
  message: PropTypes.string.isRequired,
};
