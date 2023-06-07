import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import './NavBar.css';
import {Link}from 'react-router-dom'

const NavBar = () => {
  return (
    <Row>
    <Navbar bg="blue" expand="lg">
    <Container >
      <Navbar.Brand href="/">Eye Care</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/">Home</Nav.Link> 
          <Nav.Link href="/aboutus">About Us</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
          <Nav.Link  href="/login">Login</Nav.Link>
          

        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-failed">Search</Button>

        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </Row>
  )
}

export default NavBar