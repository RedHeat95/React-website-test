import { FC, useContext } from "react";
import { Nav, Row, Col } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { NavLinks } from "../NavLinks/NavLinks";

const Main: FC = () => {
  const { store } = useContext(Context);

  return (
    <>
      <Nav className="justify-content-center bg-light mb-3" activeKey="/">
        <NavLinks />
      </Nav>

      <>
        <Row>
          <Col className="bg-light me-3 pt-3">
            <Nav className="flex-column ">
              <Nav.Link href="/" className="text-black-50">
                Section 1
              </Nav.Link>
              <Nav.Link href="/" className="text-black-50">
                Section 2
              </Nav.Link>
              <Nav.Link href="/" className="text-black-50">
                Section 3
              </Nav.Link>
              <Nav.Link href="/" className="text-black-50">
                Section 4
              </Nav.Link>
              <Nav.Link href="/" className="text-black-50">
                Section 5
              </Nav.Link>
              <Nav.Link href="/" className="text-black-50">
                Section 6
              </Nav.Link>
              <Nav.Link href="/" className="text-black-50">
                Section 7
              </Nav.Link>
              <Nav.Link href="/" className="text-black-50">
                Section 8
              </Nav.Link>
              <Nav.Link href="/" className="text-black-50">
                Section 9
              </Nav.Link>
              <Nav.Link href="/" className="text-black-50">
                Section 10
              </Nav.Link>
              <Nav.Link href="/" className="text-black-50">
                Section 11
              </Nav.Link>
              <Nav.Link href="/" className="text-black-50">
                Section 12
              </Nav.Link>
              <Nav.Link href="/" className="text-black-50">
                Section 13
              </Nav.Link>
              <Nav.Link href="/" className="text-black-50">
                Section 14
              </Nav.Link>
              <Nav.Link href="/" className="text-black-50">
                Section 15
              </Nav.Link>
            </Nav>
          </Col>

          <Col xs={9}>
            <Row className="mb-3">
              <Col className="bg-light me-3 pt-3 d-flex flex-column justify-content-center align-items-center ">
                {store.isAuth ? <h3>{store.isEmail}</h3> : null}
              </Col>

              <Col xs={4} className="bg-light pt-2 pb-5">
                <Nav className="flex-column">
                  <Nav.Link href="/" className="text-black-50">
                    Feature 1
                  </Nav.Link>
                  <Nav.Link href="/" className="text-black-50">
                    Feature 2
                  </Nav.Link>
                  <Nav.Link href="/" className="text-black-50">
                    Feature 3
                  </Nav.Link>
                  <Nav.Link href="/" className="text-black-50">
                    Feature 4
                  </Nav.Link>
                  <Nav.Link href="/" className="text-black-50">
                    Feature 5
                  </Nav.Link>
                  <Nav.Link href="/" className="text-black-50">
                    Feature 6
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>

            <Row>
              <Col className="bg-light me-3 pt-3 pb-5">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Numquam est obcaecati magni eos. Labore, obcaecati eius est
                  suscipit dicta nemo exercitationem deserunt rem corporis
                  architecto illum, tempora in aliquid vitae. Velit asperiores
                  illo atque animi, mollitia assumenda reiciendis consequatur
                  temporibus voluptates unde eos iure porro aspernatur sequi
                  eaque rerum qui voluptatum sapiente, veritatis possimus, nulla
                  recusandae dicta vero. Laboriosam maiores quod doloremque,
                  deserunt saepe fugit praesentium ex itaque asperiores atque
                  optio ab veritatis enim fugiat. Totam repellat, rem, minus
                  inventore, vero quos eum ipsa sapiente voluptatibus soluta
                  quasi deserunt ad exercitationem commodi laborum labore
                  eveniet at dolore pariatur. Ad, dolore?
                </p>
              </Col>

              <Col xs={4} className="bg-light pt-1">
                <Nav>
                  <Nav.Link href="/" className="text-black-50">
                    External Links
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    </>
  );
};

export default observer(Main);
