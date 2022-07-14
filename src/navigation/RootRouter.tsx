import { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import LoginForm from "../components/LoginForm/LoginForm";
import { Context } from "../index";

export const RootRouter = () => {
  const { store } = useContext(Context);

  return (
    <Router>
      {store.isAuth ? <Header /> : null}

      <Routes>
        <Route
          path="/"
          element={store.isAuth ? <Main /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};
