import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import Loader from './components/Loader';

const LazyApp = React.lazy(() => import('./App'));

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <React.Suspense fallback={<Loader />}>
      <React.StrictMode>
        <LazyApp />
      </React.StrictMode>
    </React.Suspense>
  </Provider>,
);
