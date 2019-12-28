import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import AuthLayout from '../_layouts/auth';
import DefaultLayout from '../_layouts/default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;

  const Layout = signed ? DefaultLayout : AuthLayout;

  // console.log(Layout);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
