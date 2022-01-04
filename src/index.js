import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import Loader from './components/Loader';

const LazyApp = React.lazy(() => import('./App'));

ReactDOM.render(
  <Provider store={store}>
    <React.Suspense fallback={<Loader />}>
      <React.StrictMode>
        <LazyApp />
      </React.StrictMode>
    </React.Suspense>
  </Provider>,
  document.getElementById('root'),
);
