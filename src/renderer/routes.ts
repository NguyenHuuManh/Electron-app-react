/* eslint-disable import/named */
import { ROUTE_PATH } from '@src/constants';
import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
import List from './screens/list';

export interface RouteInterface {
  name: string;
  key: string;
  path: string;
  Component: React.ComponentType;
}

const routes: RouteInterface[] = [
  {
    name: 'login',
    key: 'login',
    path: ROUTE_PATH.LOGIN,
    Component: Login,
  },
  {
    name: 'home',
    key: 'home',
    path: ROUTE_PATH.HOME,
    Component: Home,
  },
  {
    name: 'list',
    key: 'list',
    path: ROUTE_PATH.LIST,
    Component: List,
  },
];

export default routes;
