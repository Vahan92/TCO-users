import React, { lazy } from 'react';

import { Redirect } from 'react-router-dom';
const Home = lazy(() => import('./Home'));
const InfoPage = lazy(() => import('./InfoPage'));
const Login = lazy(() => import('./Login'));

export const PRIVATE_ROUTES = [
  {
    path: '/users',
    component: Home,
    key: 'home',
    exact: true
  },
  {
    path: '/user/:id',
    component: InfoPage,
    key: 'info',
    exact: false
  },
  {
    path: '*',
    component: () => <Redirect to="/users" />,
    exact: false,
    key: 'matchAll'
  }
];

export const PUBLIC_ROUTES = [
  {
    path: '/login',
    component: Login,
    exact: true,
    key: 'login'
  },
  {
    path: '*',
    component: () => <Redirect to="/login" />,
    exact: false,
    key: 'matchAll'
  }
];
