import {
  BrowserRouter as AppRouter, Route, Routes as Switch, Navigate,
} from 'react-router-dom';
import { Suspense } from 'react';
import { DefaultRoute, Routes } from './routes';
import DefaultLayout from '../layout/DefaultLayout';
import Error from '../views/misc/Error';
import { isUserLoggedIn } from '../utils';

function FinalRoute({ route }) {
  if (!route.public && !isUserLoggedIn()) return <Navigate to="/login" />;
  return route.layout === 'BlankLayout'
    ? <route.component />
    : (
      <DefaultLayout>
        <Suspense fallback={null}>
          <route.component />
        </Suspense>
      </DefaultLayout>
    );
}

function Router() {
  return (
    <AppRouter basename={process.env.REACT_APP_BASENAME}>
      <Switch>
        <Route
          path="/"
          element={<Navigate to={DefaultRoute} />}
        />

        {Routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<FinalRoute route={route} />}
          />
        ))}

        {/* NotFound Error page */}
        <Route path="*" element={<Error />} />
      </Switch>
    </AppRouter>
  );
}

export default Router;
