import React from "react";
import { Container, Nav, Navbar, Button, Form } from "react-bootstrap/";
import AddMovies from "./AddMovies";

const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MyCollection</Navbar.Brand>
        <Nav className="me-auto">
          <AddMovies />
          <Nav.Link href="#features">Rating Filter</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="dark">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Navigation;
