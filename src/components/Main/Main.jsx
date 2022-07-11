import { Nav, Container, Row, Col } from 'react-bootstrap';
import { ModalWindow } from '../Madal/Modal';

export const Main = () => {
  return (
    <>
      <Nav className="justify-content-center bg-light mb-3" activeKey="/">
        <Nav.Item>
          <Nav.Link href="/" className="text-black-50">
            Section 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/" className="text-black-50">
            Section 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/" className="text-black-50">
            Section 3
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/" className="text-black-50">
            Section 4
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Container>
        <Row>
          <Col className="bg-light me-3 pt-3">
            <Nav className="flex-column ">
              <Nav.Link href="/">Section 1</Nav.Link>
              <Nav.Link href="/">Section 2</Nav.Link>
              <Nav.Link href="/">Section 3</Nav.Link>
              <Nav.Link href="/">Section 4</Nav.Link>
              <Nav.Link href="/">Section 5</Nav.Link>
              <Nav.Link href="/">Section 6</Nav.Link>
              <Nav.Link href="/">Section 7</Nav.Link>
              <Nav.Link href="/">Section 8</Nav.Link>
              <Nav.Link href="/">Section 9</Nav.Link>
              <Nav.Link href="/">Section 10</Nav.Link>
              <Nav.Link href="/">Section 11</Nav.Link>
              <Nav.Link href="/">Section 12</Nav.Link>
              <Nav.Link href="/">Section 13</Nav.Link>
              <Nav.Link href="/">Section 14</Nav.Link>
              <Nav.Link href="/">Section 15</Nav.Link>
            </Nav>
          </Col>

          <Col xs={9}>
            <Row className="mb-3">
              <Col className="bg-light me-3 pt-3 d-flex justify-content-center align-items-center ">
                <ModalWindow />
              </Col>
              <Col xs={4} className="bg-light pt-2 pb-5">
                <Nav className="flex-column">
                  <Nav.Link href="/">Feature 1</Nav.Link>
                  <Nav.Link href="/">Feature 2</Nav.Link>
                  <Nav.Link href="/">Feature 3</Nav.Link>
                  <Nav.Link href="/">Feature 4</Nav.Link>
                  <Nav.Link href="/">Feature 5</Nav.Link>
                  <Nav.Link href="/">Feature 6</Nav.Link>
                </Nav>
              </Col>
            </Row>
            <Row>
              <Col className="bg-light me-3 pt-3 pb-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, commodi aliquid? Nihil dignissimos quasi beatae, fugit
                  vel laboriosam repellat? Quae quidem repellendus inventore
                  iste, sed voluptatum id fugit possimus minima deleniti!
                  Voluptatem, animi et. Corrupti rem perferendis reprehenderit
                  quasi natus eveniet. Ducimus at expedita iusto fugiat iure
                  rem, consequuntur voluptatem veniam sapiente odio quidem
                  molestias quos quis illum ratione nemo aliquam, ipsa
                  excepturi? Consequatur, distinctio repellendus praesentium
                  soluta aspernatur iste sequi amet esse quam! Recusandae dolore
                  ipsum nesciunt accusantium inventore quo nobis natus.
                  Assumenda autem nam exercitationem vitae cum ut optio
                  officiis! Nihil doloremque, odit incidunt dolore vero tenetur
                  quisquam!
                </p>
              </Col>
              <Col xs={4} className="bg-light pt-1">
                <Nav>
                  <Nav.Link href="/">External Links</Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
