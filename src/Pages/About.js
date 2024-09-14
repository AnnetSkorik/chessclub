import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import photo1 from "./../Components/newPhoto/chess1.jpeg";
import photo2 from "./../Components/newPhoto/chess2.jpeg";
import photo3 from "./../Components/newPhoto/chess3.jpeg";
import photo4 from "./../Components/newPhoto/chess4.jpeg";
import photo5 from "./../Components/newPhoto/chess5.jpeg";
import photo6 from "./../Components/newPhoto/chess6.jpeg";
import photo7 from "./../Components/newPhoto/chess7.jpeg";
import photo8 from "./../Components/newPhoto/chess8.jpeg";
import photo9 from "./../Components/newPhoto/chess9.jpeg";
import photo10 from "./../Components/newPhoto/chess10.jpeg";
import photo11 from "./../Components/newPhoto/chess11.jpeg";
import photo12 from "./../Components/newPhoto/chess12.jpeg";
import photo13 from "./../Components/newPhoto/chess13.jpeg";
import photo14 from "./../Components/newPhoto/chess14.jpeg";
import photo15 from "./../Components/newPhoto/chess15.jpeg";
import photo16 from "./../Components/newPhoto/chess16.jpeg";
import photo17 from "./../Components/newPhoto/chess17.jpeg";
import turnir from "./../Components/img/Гена.jpg";
import Footer from "./../Components/Footer";
import "./../App.css";
function About() {
  const [clickedImage, setClickedImage] = useState(null);
  const [activeKey, setActiveKey] = useState("school");
  const location = useLocation();

  useEffect(() => {
    // Прокрутка страницы вверх
    window.scrollTo(0, 0);

    // Обновление активного таба в зависимости от параметров запроса
    const queryParams = new URLSearchParams(location.search);
    const section = queryParams.get("section");
    if (section) {
      setActiveKey(section);
    }
  }, [location.search]);

  const handleImageClick = (index) => {
    setClickedImage(clickedImage === index ? null : index);
  };

  const images = [
    photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17,
  ];

  return (
    <>
      <div className="main-content">
        <Container className="about-page">
          <Tab.Container
            id="left-tabs-example"
            activeKey={activeKey}
            onSelect={(k) => setActiveKey(k)}
          >
            <Row>
              <Col sm={3} className="sticky-nav">
                <Nav variant="pills" className="flex-column mt-2">
                  <Nav.Item>
                    <Nav.Link eventKey="school">Über schachverein</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="gallery">Galerie</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="schedule">Stundenplan</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content className="mt-3">
                  <Tab.Pane eventKey="school">
                  <h6>
                       Die Kreisvorsitzende der Linken, Christin Willnat, hat
                       kürzlich den Verein OLGA e.V. in Hohenstücken besucht. Sie
                       bedankte sich vor Ort bei Ghidali Vaideslaver, der sich seit
                       vielen Jahren mit dem Verein um Lern- und
                       Freizeitbedürfnisse von Kindern kümmert. Diese lernen das
                       Schachspiel, trainieren Ringkampf oder spielen Tischtennis -
                       und das drei Mal in der Woche.
                     </h6>
                     <img
                      src={turnir}
                      className="imgKids"
                      alt="Some description"
                    />
                    <h6>
                      „Das Angebot von OLGA e.V. haben im Laufe der Jahre
                      vermutlich mehr als 1.000 Kinder, vor allem aus
                      Hohenstücken, genutzt. Ghidali Vaideslaver schaut dabei
                      nicht auf seine Zeit und schon gar nicht auf die Herkunft
                      der Kinder. Im Schach hat er Talente entdeckt und gefördert,
                      die mittlerweile an Landes- oder Deutschen Meisterschaften
                      teilgenommen haben", berichtet Christin Willnat. Aktuell
                      wird die Fassade des Trainingsgebäudes (neben dem
                      Sportplatz) künstlerisch gestaltet. Einen Teil der Kosten
                      trägt die Stadt, aber auch der Verein muss einen Eigenanteil
                      aufbringen. „Das war für uns Anlass, dem Verein nicht nur
                      mit Worten zu danken, sondern dessen Arbeit auch mit einer
                      kleinen Spende von Mitgliedern der Linken zu unterstützen",
                      so die Kreisvorsitzende weiter.
                    </h6>
                    <a href="https://meetingpoint-brandenburg.de/neuigkeiten/artikel/165454-zwischen-schach-und-ringkampf-olga-e-v">
                      Der Artikel wurde von hier kopiert
                    </a>
                  </Tab.Pane>
                  <Tab.Pane eventKey="gallery">
                    <h3>Galerie</h3>
                    <div className="d-flex flex-wrap">
                      {images.map((photo, index) => (
                        <img
                          key={index}
                          src={photo}
                          alt={`gallery-${index}`}
                          className={`galeriePhoto ${clickedImage === index ? "clicked" : ""}`}
                          onClick={() => handleImageClick(index)}
                        />
                      ))}
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="schedule">
                                       <Col md="6">
                       <h5 className="text-center">Zeit von die Unterrichten</h5>
                       <Card
                        className="mb-6"
                        style={{ width: "100%", maxWidth: "600px" }}
                      >
                        <ListGroup variant="flush">
                          <ListGroup.Item>Dienstag 17:00 - 19:00</ListGroup.Item>
                          <ListGroup.Item>
                            Donnerstag 17:00 - 19:00
                          </ListGroup.Item>
                          <ListGroup.Item>Sonntag 11:00 - 13:00</ListGroup.Item>
                        </ListGroup>
                      </Card>
                      <Card style={{ width: "100%", maxWidth: "600px" }}>
                        <Card.Body className="mt-6">
                          <Card.Title>
                            Zeit von die Unterrichten am Sommer und Ferrien:
                          </Card.Title>
                          <Card.Text>
                            Dienstag 16:00 - 18:00
                            <br />
                            Donnerstag 16:00 - 18:00
                            <br />
                            Sonntag 11:00 - 13:00
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default About;