import '@src/Popup.css';
import { withErrorBoundary, withSuspense } from '@extension/shared';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/auth/Login';
import About from './pages/About';

const Popup = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
