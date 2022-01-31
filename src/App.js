import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './router/Router';

function App() {
  return (
    <>
      <Router />
      <ToastContainer hideProgressBar icon={false} />
    </>
  );
}

export default App;
