import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { Confirm } from '../components/Confirm/Confirm';

export const RootRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};
