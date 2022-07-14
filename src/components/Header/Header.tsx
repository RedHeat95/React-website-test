import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";

export const Header = () => {
  return (
    <>
      <Navbar bg="light" className="mb-3">
        <Container>
          <Navbar.Brand href="/">
            <h1>LOGO</h1>
          </Navbar.Brand>

          <div>
            <Nav className="me-3">
              <Nav.Link href="/">Topic 1</Nav.Link>
              <Nav.Link href="/">Topic 2</Nav.Link>
              <Nav.Link href="/">Topic 3</Nav.Link>
              <Nav.Link href="/">Topic 4</Nav.Link>
            </Nav>

            <Form className="d-flex justify-content-end">
              <div className="d-flex bg-white ">
                <FormControl
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </Form>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
