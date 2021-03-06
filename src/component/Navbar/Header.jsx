import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand href="#home">Chyper Primary</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="me-auto">
      </Nav>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="https://github.com/Tudo12" disabled>Dashboard</Nav.Link>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
}

export default Header;
