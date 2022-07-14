import { FC, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Badge, Form, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import ModalWindow from "../Modal/ModalWindow";

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(Context);
  const navi = useNavigate();

  const LogIn = () => {
    store.login(email, password);

    if (store.isAuth) {
      navi("/");
    }
  };

  return (
    <>
      <ModalWindow />

      <h1 className="mt-5 text-center">
        <Badge bg="secondary">LogIn</Badge>
      </h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
      </Form>

      <Button type="submit" variant="primary" onClick={LogIn}>
        Login
      </Button>
    </>
  );
};

export default observer(LoginForm);
