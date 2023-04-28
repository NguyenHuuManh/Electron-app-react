import routes from '@renderer/routes';
import { ROUTE_PATH } from '@src/constants';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './Application.scss';
import PrivateRoute from './PrivateRoute';

const Application: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [versions, setVersions] = useState<Record<string, string>>({});
  /**
   * On component mount
   */
  useEffect(() => {
    const useDarkTheme = parseInt(localStorage.getItem('dark-mode'));
    if (isNaN(useDarkTheme)) {
      setDarkTheme(true);
    } else if (useDarkTheme == 1) {
      setDarkTheme(true);
    } else if (useDarkTheme == 0) {
      setDarkTheme(false);
    }

    // Apply verisons
    const app = document.getElementById('app');
    const versions = JSON.parse(app.getAttribute('data-versions'));
    setVersions(versions);
  }, []);

  /**
   * On Dark theme change
   */

  useEffect(() => {
    if (darkTheme) {
      localStorage.setItem('dark-mode', '1');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('dark-mode', '0');
      document.body.classList.remove('dark-mode');
    }
  }, [darkTheme]);

  /**
   * Toggle Theme
   */
  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <div id='erwt'>
      <button onClick={toggleTheme} style={{ position: 'absolute', right: 0 }}>
        {darkTheme ? 'Light Theme' : 'Dark Theme'}
      </button>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              {...route}
              Component={PrivateRoute(route.Component)}
              key={route.key}
            />
          ))}
          <Route element={<Navigate to={ROUTE_PATH.HOME} />} path='*' />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Application;
