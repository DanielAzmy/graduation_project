import React, { useContext } from 'react';
import {  Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  <Route
      {...rest}
      element={
        isAuthenticated ? (
          <Component />
        ) : (
          navigate('/Login')
        )
      }
    />
  
};
export default PrivateRoute;
