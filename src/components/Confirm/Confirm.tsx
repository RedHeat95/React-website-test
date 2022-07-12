import { Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Confirm = () => {
  return (
    <Container>
      <h1>Registration Confirmation</h1>

      <NavLink to="/">
        <Button variant="primary">Back</Button>
      </NavLink>
    </Container>
  );
};
