import {Navbar, Nav, Container, Button} from 'react-bootstrap';

const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark" className="w-full">
        <Container className="d-flex justify-content-between my-2">
          <Navbar.Brand className="fs-3" href="#home">Meal Tracker</Navbar.Brand>
          <Nav >
            <Button variant="danger">Delete All</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header