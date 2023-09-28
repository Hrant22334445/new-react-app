import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function Header() {

    return(
        <Navbar bg="dark" variant="dark" expand='lg'>
          <Navbar.Brand href="#">News</Navbar.Brand>
          <Navbar.Toggle aria-controls="my-navbar" />
            <Navbar.Collapse id="my-navbar">
            <Nav className="mr-auto">
              <Nav.Link href='#'>Home</Nav.Link>
              <Nav.Link href='#'>About</Nav.Link>
            </Nav>

            <Form className="ml-auto">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
              <Button variant="primary">Login</Button>
              <Button variant="secondary">Register</Button>
            </Form>
          </Navbar.Collapse>
          
        </Navbar>
        
    )
}

export default Header;