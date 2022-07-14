import { Nav } from "react-bootstrap";

export const NavLinks = () => {
  return (
    <>
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
    </>
  );
};
