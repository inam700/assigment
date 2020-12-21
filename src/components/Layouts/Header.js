import React, { Component } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
class Header extends Component {
  render() {
    return (
      <Navbar
        bg="dark"
        variant="dark"
        collapseOnSelect
        expand="md"
        className="mb-3"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>BlogApp</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {localStorage.getItem("success") === "true" ? (
                <LinkContainer to="/add-post">
                  <Nav.Link>Add Post</Nav.Link>
                </LinkContainer>
              ) : null}
              {localStorage.getItem("success") === "true" ? (
                <LinkContainer to="/">
                  <Nav.Link>{localStorage.getItem("email")}</Nav.Link>
                </LinkContainer>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              )}
              {localStorage.getItem("success") === "true" ? (
                <Button
                  onClick={() => {
                    localStorage.setItem("success", "false");
                  }}
                >
                  LogOut
                </Button>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default Header;
