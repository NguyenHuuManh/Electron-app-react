/* eslint-disable react/display-name */
/* eslint-disable react/jsx-no-useless-fragment */
import Header from '@components/Header';
import React from 'react';

function PrivateRoute(Component: any) {
  return (props: any) => {
    return (
      <>
        <Header />
        <Component {...props} />
      </>
    );
  };
}
export default PrivateRoute;
