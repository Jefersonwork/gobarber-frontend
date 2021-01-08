import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  const loading = useSelector((state) => state.auth.loading);

  return (
    <Wrapper>
      <Content loading={String(loading)}>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
