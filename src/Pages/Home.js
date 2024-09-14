import React, { Component } from "react";
import CaruselBox from "./../Components/CaruselBox";
import { Container, CardGroup, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import schule from "./../Components/img/chess.jpg";
import Gena1 from "./../Components/newPhoto/Гена1.jpg";
import chessDesk from "./../Components/img/chessDesk.jpg";
import Footer from "./../Components/Footer";
import "./../App.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <CaruselBox />

        <Container className="home_container">
          <h2 className="text-center m-4">Unsere Schachverein</h2>
          <CardGroup className="cardGroup">
           <Card bg="info" border="success" className="card_place">
              <Card.Img variant="top" src={schule} className="cardImg" />
              <Card.Body>
                <Card.Title>Über schachverein</Card.Title>
                <Card.Text>Geschichte unserer Schachverein</Card.Text>
                <Link to="/about?section=school">
                  <Button variant="primary">Weitere Details</Button>
                </Link>
              </Card.Body>
            </Card>

            <Card bg="info" border="success" className="card_place">
              <Card.Body>
                <Card.Title>Stundenplan</Card.Title>
                <Card.Text>
                  Der Unterricht findet dreimal pro Woche statt.
                </Card.Text>
                <Link to="/about?section=schedule">
                  <Button variant="primary">Weitere Details</Button>
                </Link>
              </Card.Body>
              <Card.Img variant="top" src={Gena1} className="cardImg" />
            </Card>

            <Card bg="info" border="success" className="card_place">
              <Card.Img variant="top" src={chessDesk} className="cardImg" />
              <Card.Body>
                <Card.Title>Galerie</Card.Title>
                <Card.Text>Unsere Geschichte in Bildern</Card.Text>
                <Link to="/about?section=gallery">
                  <Button variant="primary">Weitere Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>

        <Footer />
      </>
    );
  }
}
