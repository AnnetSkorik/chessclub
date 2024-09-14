import React, { Component } from "react";
import {
  Nav,
  Navbar,
  Container,
} from "react-bootstrap";
import logo from "./../Components/img/logo.png";
import "./../App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Contacts from "../Pages/Contacts";
import About from "../Pages/About";
import Blog from "../Pages/Blog";

export default class Header extends Component {
  render() {
    return (
      <Router>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
        >
          <Container className="header">
            <Navbar.Brand as={Link} to="/" className="brand">
              <img
                src={logo}
                height="40"
                className="d-inline-block align-top"
                alt="Logo"
              />
              <div>
                <div className="textLogo">
                  <h6>Brandenburg</h6>
                  <h6>Schachverein</h6>
                </div>
                <h6>Olga e.V.</h6>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  Über uns
                </Nav.Link>
                <Nav.Link as={Link} to="/contacts">
                  Kontakte
                </Nav.Link>
                <Nav.Link as={Link} to="/blog">
                  Nachricht
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div style={{ marginTop: "70px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
