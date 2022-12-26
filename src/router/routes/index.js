import { lazy } from 'react';

const DefaultRoute = '/home';

// By default all routes except /login require authentication unless property public = true
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home')),
    layout: 'BlankLayout',
    public: true,
  },
  {
    path: '/dashboard',
    component: lazy(() => import('../../views/Dashboard')),
  },
  {
    path: '/second-page',
    component: lazy(() => import('../../views/SecondPage')),
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/authentication/Login')),
    layout: 'BlankLayout',
    public: true,
  },
  {
    path: '/forgot-password',
    component: lazy(() => import('../../views/authentication/ForgotPassword')),
    layout: 'BlankLayout',
    public: true,
  },
  {
    path: '/reset-password',
    component: lazy(() => import('../../views/authentication/ResetPassword')),
    layout: 'BlankLayout',
    public: true,
  },
];

export { DefaultRoute, Routes };
